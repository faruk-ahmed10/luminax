import Web3 from 'web3';
import Web3Modal from 'web3modal';



export const getProvider = async () => {
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
        })
        
    try{
        provider = await web3Modal.connect();
    }catch(e){
        console.log("Error: ", e);
        return;
    }

    const web3 = new Web3(provider);

    return web3;

};