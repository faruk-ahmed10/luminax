import { useContext, createContext, useState, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { toast } from 'react-toastify';
import { FaucetABI } from '../_shared/abi/faucetABI';
import { TokenABI } from '../_shared/abi/tokenABI';
import { SwapABI } from '../_shared/abi/swapABI';
import { ReservoirABI } from '../_shared/abi/reservoirABI';

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
export const DEFAULT_SLIPPAGE = 3;
//we should take approval for 2^256-1 to avoid taking approval everytime when user sell the token it will save user gas
export const APPROVAL_AMOUNT = String(2 ** 64);

const supportedChainID = Web3.utils.toHex(+process.env.NEXT_PUBLIC_SUPPORTED_CHAINID);

const GlobalProvider = ({ children }) => {
    const [selectedAccount, setSelectedAccount] = useState(undefined);
    const [isConnected, setIsConnected] = useState(false);
    const [provider, setProvider] = useState(undefined);
    const [web3Instance, setWeb3Instance] = useState(undefined);
    const [chainId, setChainId] = useState();
    const [lumixBalance, setLumixBalance] = useState();
    const [bnbBalance, setBnbBalance] = useState();
    const [bnbLumixPrice, setBnbLumixPrice] = useState();
    const [wrongNetwork, setWrongNetWork] = useState(false);
    const [reservoirContract, setReservoirContract] = useState();
    const [reservoirStats, setReservoirStats] = useState([]);
    const [reservoirTotalDeposit, setReservoirTotalDeposit] = useState(0);

    const connectWallet = async () => {
        if (isConnected && web3Instance) return web3Instance;
        if (!window.ethereum) {
            toast.error('Please install metamask, currently your browser does not have any supported wallet installed')
            return;
        }
        
        let web3Provider = undefined;
        let web3 = undefined;

        const providerOptions = {
            binancechainwallet: {
                package: true
            },
        };

        const web3Modal = new Web3Modal({
            cacheProvider: true,
            theme: 'dark',
            providerOptions, // required
        });


        try {
            web3Provider = await web3Modal.connect();
        } catch (e) {
            console.log("Error: ", e);
            return;
        }
        web3 = new Web3(web3Provider);
        const chainId = Web3.utils.toHex(await web3.eth.getChainId());
        if (chainId !== supportedChainID) {
            await handleSwitchNetwork(supportedChainID);
        }

        const accounts = await web3.eth.getAccounts();
        setSelectedAccount(accounts[0]);
        setProvider(web3Provider);
        setWeb3Instance(web3);
        setChainId(chainId);
        setIsConnected(true);
        return web3;
    }

    const handleSwitchNetwork = async (chainId) => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainId }],
            });
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (err.code === 4902) {
                if (chainId === 0x61) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'BNB Smart Chain Testnet',
                                chainId: chainId,
                                nativeCurrency: { name: 'TBNB', decimals: 18, symbol: 'tBNB' },
                                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
                                blockExplorerUrls: ['https://testnet.bscscan.com/']
                            },
                        ],
                    });
                } else if (chainId === 0x38) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainName: 'Binance Smart Chain',
                                chainId: chainId,
                                nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
                                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                                blockExplorerUrls: ['https://bscscan.com/']
                            },
                        ],
                    });
                }
            }
        }

        setWrongNetWork(false);
    }

    const toWei = (amount) => {
        if (!amount) return 0;
        return Web3.utils.toWei(amount);
    }

    const fromWei = (amount) => {
        if (!amount) return 0;
        return Web3.utils.fromWei(amount);
    }

    const getFaucetContract = async () => {
        let web3 = web3Instance;
        if (!isConnected || !web3) {
            web3 = await connectWallet();
        }

        return new web3.eth.Contract(FaucetABI, process.env.NEXT_PUBLIC_FAUCET_ADDRESS).methods;
    }

    const getLumixTokenContract = async () => {
        let web3 = web3Instance;
        if (!isConnected || !web3) {
            web3 = await connectWallet();
        }

        return new web3.eth.Contract(TokenABI, process.env.NEXT_PUBLIC_TOKEN_ADDRESS).methods;
    }

    const getSwapContract = async () => {
        let web3 = web3Instance;
        if (!isConnected || !web3) {
            web3 = await connectWallet();
        }

        return new web3.eth.Contract(SwapABI, process.env.NEXT_PUBLIC_SWAP_ADDRESS).methods;
    }

    const getReservoirContract = async () => {
        let web3 = web3Instance;
        if (!isConnected || !web3) {
            web3 = await connectWallet();
        }

        return new web3.eth.Contract(ReservoirABI, process.env.NEXT_PUBLIC_RESERVOIR_ADDRESS).methods;
    }

    const approve = async (spender, amount,  account = undefined) => {
        if (!amount || !spender) {
            return console.log('spender and ammount is required to approve');
        }
        const tc = await getLumixTokenContract();
        const amt = toWei(amount);
        return await tc.approve(spender, amt)
            .send({ from: account || selectedAccount })
            .on('transactionHash', (hash) => toast.loading('Approval on the process!'));

    };

    const getAllownce = async (spender, account = undefined) => {
        const tc = await getLumixTokenContract();
        const amount = await tc.allowance(account || selectedAccount, spender).call();
        return fromWei(amount);
    };

    const getLumixBalance = async (account = undefined) => {
        const tc = await getLumixTokenContract();
        const bal = Number(fromWei(await tc.balanceOf(account || selectedAccount).call())).toFixed(2);
        setLumixBalance(bal);
        return bal;
    };

    const getBnbBalance = async (account = undefined) => {
        let web3 = web3Instance;
        if (!isConnected || !web3) {
            web3 = await connectWallet();
        }

        const bnbAmount = await web3.eth.getBalance(account || selectedAccount);
        const bal = Number(fromWei(bnbAmount)).toFixed(2);
        setBnbBalance(bal);
        return bal;
    }

    /**
     * swap related functinalities
    */
    const getBnbToLumixPrice = async (bnbAmount = 1) => {
        // BNB -> token price
        const contract = await getSwapContract();
        const price = await contract.getBnbToTokenInputPrice(toWei(String(bnbAmount))).call();
        return Number(fromWei(price)).toFixed(2);
    }

    const getLumixToBnbPrice = async (tokenAmount = 1) => {
        // LMT -> BNB price
        const contract = await getSwapContract();
        const price = await contract.getTokenToBnbInputPrice(toWei(String(tokenAmount))).call();
        return fromWei(price);
    }

    const getEstimatedReceiveLumix = async (amount, splippage = 3) => {
        // BNB -> LMT  
        const contract = await getSwapContract();
        const price = await contract.getBnbToTokenInputPrice(toWei(String(amount))).call();
        return fromWei(price) * (100 - splippage) / 100;
    }

    const getEstimatedReceiveBNB = async (amount, splippage = 3) => {
        //LMT -> BNB
        const contract = await getSwapContract();
        const price = await contract.getTokenToBnbInputPrice(toWei(String(amount))).call();
        return (fromWei(price) * splippage) / 100;
    }


    const buyLumix = async (min_tokens, sellBnbAmount) => {
        const contract = await getSwapContract();

        const bnbValue = toWei(String(sellBnbAmount));
        min_tokens = toWei(String(min_tokens));

        return contract.bnbToTokenSwapInput(min_tokens)
            .send({ from: selectedAccount, value: bnbValue })
            .on('transactionHash', (hash) => {
                return toast.loading(<div>
                    <p>View Tx:</p>
                    <a href={`${process.env.NEXT_PUBLIC_EXPLORER_URL}/tx/${hash}`} target="_blank" className='underline'>{hash.substring(0, 28)}...</a>
                </div>);
            });
    }

    const sellLumix = async (tokens_sold, min_bnb) => {
        try {

            const contract = await getSwapContract();
            const tc = await getLumixTokenContract();

            tokens_sold = toWei(String(tokens_sold));
            min_bnb = toWei(String(min_bnb));
            const allowance = await tc.allowance(selectedAccount, process.env.NEXT_PUBLIC_SWAP_ADDRESS).call();

            if ((Number(tokens_sold) > Number(allowance)) || Number(allowance) === 0) {
                await tc.approve(process.env.NEXT_PUBLIC_SWAP_ADDRESS, toWei(APPROVAL_AMOUNT))
                    .send({ from: selectedAccount })
                    .on('transactionHash', (hash) => toast.loading('Approval on the process!'));
                toast.dismiss();
            }


            return contract.tokenToBnbSwapInput(tokens_sold, min_bnb)
                .send({ from: selectedAccount })
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

    /**
     * @faucet related utility functions
     */

    const claimsAvailable = async (address = undefined) => {
        const fc = await getFaucetContract();
        const amt = await fc.claimsAvailable(address || selectedAccount).call();
        return fromWei(amt);

    };

    const payoutOf = async (address = undefined) => {
        const fc = await getFaucetContract();
        return await fc.payoutOf(address || selectedAccount).call();

    };

    const userInfo = async (address = undefined) => {
        const fc = await getFaucetContract();
        return await fc.userInfo(address || selectedAccount).call();

    };

    const userInfoTotals = async (address) => {
        const fc = await getFaucetContract();
        return await fc.userInfoTotals(address).call();
    };

    const custody = async (address) => {
        const fc = await getFaucetContract();
        return await fc.custody(address).call();

    };

    const deposit = async (amount) => {
        const fc = await getFaucetContract();
        const buddyAddrs = await userInfo(selectedAccount);
        const amt = toWei(Str(amount));
        // toast.info('Deposit on the process');
        return await fc.deposit(buddyAddrs.upline, amt)
            .send({
                from: selectedAccount
            }).on('transactionHash', (hash) => toast.loading('Deposit on the process!'))

    };

    const totalWithdraw = async () => {
        const fc = await getFaucetContract();
        return await fc.total_withdraw().call();
    };

    const recharge = async (address = undefined) => {
        const fc = await getFaucetContract();
        return await fc.roll().send({ from: address || selectedAccount });

    };

    const drain = async (address = undefined) => {
        const fc = await getFaucetContract();
        return await fc.claim().send({ from: address || selectedAccount });

    };


    const updateBalance = async (account = undefined) => {
        await getBnbBalance(account);
        await getLumixBalance(account);
        setBnbLumixPrice(await getBnbToLumixPrice(1));
    }

    const updateReservoirStats = async () => {
        if (reservoirContract) {
            setReservoirStats(await reservoirContract.statsOf(selectedAccount).call());
            setReservoirTotalDeposit(await reservoirContract.totalDeposits().call() * 100);
        }
    }

    useEffect(() => {
        provider?.on("accountsChanged", (accounts) => {
            setSelectedAccount(accounts[0]);
            updateBalance(accounts[0]);
            updateReservoirStats();
            console.log('accountsChanged: ');
            console.log(accounts);
        });

        // Subscribe to chainId change
        provider?.on("chainChanged", (chainId) => {
            setChainId(chainId);
            setWrongNetWork(supportedChainID !== chainId);
            if(supportedChainID !== chainId) {
                setBnbBalance('');
                setLumixBalance('');
                setReservoirStats([]);
                setReservoirTotalDeposit(0)
            }
        });

        // Subscribe to provider connection
        provider?.on("connect", (info) => {
            console.log("connection status changed");
            console.log(info);
        });

        // Subscribe to provider disconnection
        provider?.on("disconnect", (error) => {
            setIsConnected(false);
            setChainId(null);
            setSelectedAccount('');
            setBnbBalance('');
            setLumixBalance('');
            setReservoirStats([]);
            setReservoirTotalDeposit(0);
        });

    }, [provider]);

    useEffect(() => {
        if(selectedAccount && supportedChainID === chainId) {
            console.log('fetching.....');
            updateBalance(selectedAccount);
        }
    }, [selectedAccount, chainId]);

    useAsyncEffect(async () => {
        if(isConnected && !reservoirContract) {
            setReservoirContract(await getReservoirContract())
        }
    }, [isConnected]);


    return (
        <GlobalContext.Provider value={{
            connectWallet,
            handleSwitchNetwork,
            approve,
            getAllownce,
            updateBalance,
            getBnbToLumixPrice,
            getLumixToBnbPrice,
            getEstimatedReceiveLumix,
            getEstimatedReceiveBNB,
            buyLumix,
            sellLumix,
            claimsAvailable,
            payoutOf,
            userInfoTotals,
            custody,
            deposit,
            totalWithdraw,
            recharge,
            drain,
            fromWei,
            toWei,
            userInfo,
            getSwapContract,
            updateReservoirStats,
            reservoirStats,
            reservoirTotalDeposit,
            reservoirContract,
            selectedAccount,
            lumixBalance,
            bnbLumixPrice,
            bnbBalance,
            chainId,
            isConnected,
            provider,
            web3Instance,
            wrongNetwork,
            supportedChainID
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;