import { toast } from 'react-toastify';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { FaucetABI } from '../_shared/abi/faucetABI';
import { TokenABI } from '../_shared/abi/tokenABI';
import { SwapABI } from '../_shared/abi/swapABI';

let selectedAddress;
let isInit = false;
let web3;

// Intialized Web3;
let provider;
const approvalAmount = String(2 ** 64);

export const init = async () => {



    const providerOptions = {
        binancechainwallet: {
            package: true
        }
    };

    const web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true,
        theme: 'dark',
        providerOptions, // required
    });


    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Error: ", e);
        return;
    }

    web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId()
    if (chainId !== 97) return toast.info('Please, switch Network to "BSC Testnet"');
    const acts = await web3.eth.getAccounts();
    console.log("Accounts: ", acts[0]);
    selectedAddress = acts[0];
    console.log(selectedAddress);
    provider.on('accountsChanged', (accounts) => selectedAddress = accounts[0]);

    isInit = true;
};

export const checkConnection = () => selectedAddress;

if (provider) {
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        console.log(chainId);
    });

    // Subscribe to provider connection
    provider.on("connect", (info) => {
        console.log(info);
    });

    // Subscribe to provider disconnection
    provider.on("disconnect", (error) => {
        console.log(error);
    });
}

// Declaring faucet contract
const faucetContract = async () => {

    if (!isInit) {
        await init();
    }

    return new web3.eth.Contract(FaucetABI, process.env.NEXT_PUBLIC_FAUCET_ADDRESS).methods;
};


//  Declaring token contract

const tokenContract = async () => {

    if (!isInit) {
        await init();
    }

    return new web3.eth.Contract(TokenABI, process.env.NEXT_PUBLIC_TOKEN_ADDRESS).methods;
};



// *********** Faucet ************* //
// Defining methods for faucet spot component of faucet contracts


export const claimsAvailable = async () => {

    const fc = await faucetContract();
    console.log("Faucet Contract: ", fc);
    const amt = await fc.claimsAvailable(selectedAddress).call();
    return web3.utils.fromWei(amt);

};

export const PayoutOf = async () => {

    const fc = await faucetContract();
    return await fc.payoutOf(selectedAddress).call();

};

export const userInfo = async () => {

    const fc = await faucetContract();
    return await fc.userInfo(selectedAddress).call();

};

export const userInfoTotals = async (address) => {

    const fc = await faucetContract();
    return await fc.userInfoTotals(address).call();

};

export const Custody = async (address) => {

    const fc = await faucetContract();
    return await fc.custody(address).call();

};

export const deposit = async (amount) => {

    const fc = await faucetContract();
    const buddyAddrs = await userInfo(selectedAddress);
    const amt = web3.utils.toWei(amount);
    // toast.info('Deposit on the process');
    return await fc.deposit(buddyAddrs.upline, amt)
        .send({
            from: selectedAddress
        }).on('transactionHash', (hash) => toast.loading('Deposit on the process!'))


export const totalWithdraw = async () => {
    const fc = await faucetContract();
    return await fc.total_withdraw().call();
};

export const recharge = async () => {

    const fc = await faucetContract();
    return await fc.roll().send({ from: selectedAddress });

};

export const drain = async () => {

    const fc = await faucetContract();
    return await fc.claim().send({ from: selectedAddress });

};


// #######*****  Methods of token contracts for faucet page *****############

export const balanceOf = async (address = undefined) => {

    const tc = await tokenContract();
    console.log("Token Contract: ", tc);
    const bal = await tc.balanceOf(address || selectedAddress).call();
    return web3.utils.fromWei(bal);

};

export const approve = async (amount) => {

    const tc = await tokenContract();
    const amt = web3.utils.toWei(amount);
    return await tc.approve(process.env.NEXT_PUBLIC_FAUCET_ADDRESS, amt)
        .send({ from: selectedAddress })
        .on('transactionHash', (hash) => toast.loading('Approval on the process!'));

};

export const getAllownce = async () => {
    const tc = await tokenContract();
    const amount = await tc.allowance(selectedAddress, process.env.NEXT_PUBLIC_FAUCET_ADDRESS).call();
    return web3.utils.fromWei(amount);
};


/** utility functions for Exchange/Swap Contract */
export const swapContract = async () => {
    if (!isInit) {
        await init();
    }

    return new web3.eth.Contract(SwapABI, process.env.NEXT_PUBLIC_SWAP_ADDRESS).methods;
}

export const getAddressBnbBalance = async (address=undefined) => {
    if (!isInit) {
        await init();
    }

    const bnbAmount = await web3.eth.getBalance(address || selectedAddress);
    return Number(web3.utils.fromWei(bnbAmount)).toFixed(2);
};

export const getBnbToLmtPrice = async (bnbAmount = 1) => {
    // BNB -> token price
    const contract = await swapContract();
    const price = await contract.getBnbToTokenInputPrice(web3.utils.toWei(String(bnbAmount))).call();
    return Number(web3.utils.fromWei(price)).toFixed(2);
}

export const getLmtToBbnPrice = async (tokenAmount = 1) => {
    // LMT -> BNB price
    const contract = await swapContract();
    const price = await contract.getTokenToBnbInputPrice(web3.utils.toWei(String(tokenAmount))).call();
    return web3.utils.fromWei(price);
}

export const getEstimatedReceiveLMT = async (amount, splippage = 3) => {
    // BNB -> LMT  
    const contract = await swapContract();
    const price = await contract.getBnbToTokenInputPrice(web3.utils.toWei(String(amount))).call();
    console.log('price ', web3.utils.fromWei(price));
    return web3.utils.fromWei(price) * (100 - splippage) / 100;
}

export const getEstimatedReceiveBNB = async (amount, splippage = 3) => {
    //LMT -> BNB
    const contract = await swapContract();
    const price = await contract.getTokenToBnbInputPrice(web3.utils.toWei(String(amount))).call();
    console.log('price ', web3.utils.fromWei(price));
    return (web3.utils.fromWei(price) * splippage) / 100;
}

export const buyLMT = async (min_tokens, sellBnbAmount) => {
    const contract = await swapContract();

    const bnbValue = web3.utils.toWei(String(sellBnbAmount));
    min_tokens = web3.utils.toWei(String(min_tokens));

    return contract.bnbToTokenSwapInput(min_tokens)
        .send({ from: selectedAddress, value: bnbValue })
        .on('transactionHash', (hash) => {
            return toast.loading(<div>
                <p>View Tx:</p>
                <a href={`${process.env.NEXT_PUBLIC_EXPLORER_URL}/tx/${hash}`} target="_blank" className='underline'>{hash.substring(0, 28)}...</a>
            </div>);
        });
}

export const sellLMT = async (tokens_sold, min_bnb) => {
    try {

        const contract = await swapContract();
        const tc = await tokenContract();

        tokens_sold = web3.utils.toWei(String(tokens_sold));
        min_bnb = web3.utils.toWei(String(min_bnb));
        const allowance = await tc.allowance(selectedAddress, process.env.NEXT_PUBLIC_SWAP_ADDRESS).call();

        if ((Number(tokens_sold) > Number(allowance)) || Number(allowance) === 0) {
            await tc.approve(process.env.NEXT_PUBLIC_SWAP_ADDRESS, web3.utils.toWei(approvalAmount))
                .send({ from: selectedAddress })
                .on('transactionHash', (hash) => toast.loading('Approval on the process!'));
            toast.dismiss();
        }


        return contract.tokenToBnbSwapInput(tokens_sold, min_bnb)
            .send({ from: selectedAddress, gas: web3.eth.getBlock("latest").gasLimit })
            .on('transactionHash', (hash) => {
                return toast.loading(<div>
                    <p>View Tx:</p>
                    <a href={`${process.env.NEXT_PUBLIC_EXPLORER_URL}/tx/${hash}`} target="_blank" className='underline'>{hash.substring(0, 28)}...</a>
                </div>);
            });

    } catch (error) {
        console.log(error);
        throw new Error(error?.message ?? 'Transaction failed please try again');
    }
}

// Exported Web3 to use on others components
export { web3 };
