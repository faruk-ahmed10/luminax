import { toast } from 'react-toastify';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { FaucetABI } from '../_shared/abi/faucetABI.ts';
import { TokenABI } from '../_shared/abi/tokenABI.ts';

let selectedAddress;
let isInit = false;
let web3;

// Intialized Web3;

export const init = async () => {

    let provider;

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
    
    
    try{
        provider = await web3Modal.connect();
    }catch(e){
        console.log("Error: ", e);
        return;
    }

    web3 = new Web3(provider);

    const acts = await web3.eth.getAccounts();
    console.log("Accounts: ",acts[0]);
    selectedAddress = acts[0];
    console.log(selectedAddress);
    provider.on('accountsChanged', (accounts) => selectedAddress = accounts[0]);

    isInit = true;
};

export const checkConnection = () => selectedAddress;
// Declaring faucet contract
const faucetContract = async () => {

    if(!isInit){
        await init();
    }

    return new web3.eth.Contract(FaucetABI, process.env.NEXT_PUBLIC_FAUCET_ADDRESS).methods;
};


//  Declaring token contract

const tokenContract = async () => {

    if(!isInit){
        await init();
    }

    return new web3.eth.Contract(TokenABI, process.env.NEXT_PUBLIC_TOKEN_ADDRESS).methods;
};



// *********** Faucet ************* //
// Defining methods for faucet spot component of faucet contracts


export const claimsAvailable = async () => {

    const fc = await faucetContract();
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
    console.log("buddy addrs",buddyAddrs.upline);
    const amt = web3.utils.toWei(amount);
    console.log(amt);
    toast.info('Deposit on the process');
    return await fc.deposit(buddyAddrs.upline, amt)
    .send({
        from: selectedAddress
    });
    
};

export const totalWithdraw = async () => {
    const fc = await faucetContract();
    return await fc.total_withdraw().call();
};


//  Methods of token contracts for faucet page

export const balanceOf = async () => {

    const tc = await tokenContract();
    console.log("Token Contract: ", tc);
    const bal = await tc.balanceOf(selectedAddress).call();
    return web3.utils.fromWei(bal);
    
};

export const approve = async (amount) => {

    const tc = await tokenContract();
    const amt = web3.utils.toWei(amount);
    toast.info('Approval on the process');
    return await tc.approve(process.env.NEXT_PUBLIC_FAUCET_ADDRESS, amt).send({from: selectedAddress});

};

export const getAllownce = async () => {
    const tc = await tokenContract();
    const amount = await tc.allowance(selectedAddress, process.env.NEXT_PUBLIC_FAUCET_ADDRESS).call();
    return web3.utils.fromWei(amount);
};

// Exported Web3 to use on others components
export {web3};
