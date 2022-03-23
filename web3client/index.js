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
    return await fc.claimsAvailable(selectedAddress).call();

};

export const PayoutOf = async () => {

    const fc = await faucetContract();
    console.log("Contract: ", fc);
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

export const deposit = async (buddyAddress, amount) => {

    const fc = await faucetContract();
    return await fc.deposit(buddyAddress, amount).call();
};

//  Methods of token contracts for faucet page

export const balanceOf = async () => {

    const tc = await tokenContract();
    console.log("Token Contract: ", tc);
    return await tc.balanceOf(selectedAddress).call();
    
};

export const approve = async (amount) => {

    const tc = await tokenContract();
    return await tc.approve(process.env.NEXT_PUBLIC_FAUCET_ADDRESS, amount).call();

};