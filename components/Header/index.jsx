import { useRef, useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import { useContext } from 'react';
import { SidebarContext } from '../../context/context';
import Web3 from 'web3';    
import Web3Modal from 'web3modal';




const Header = ({title}) => {
    const [address, setAddress] = useState(null);
    const { sidebar, setSidebar } = useContext(SidebarContext);
    const web3ModalRef = useRef()
    
    let provider;


    const walletConnector = async () => {
        
        try{
            provider = await web3ModalRef.current.connect();
            console.log("Provider inside: ", provider);
        }catch(e){
            console.log("Error: ", e);
            return;
        }

        const web3 = new Web3(provider);
        const chainId = await web3.eth.getChainId();
        const adrs = await web3.eth.getAccounts();
        if(adrs){
            setAddress(adrs[0]);
        }
    };




    useEffect(() => {
        const providerOptions = {
            binancechainwallet: {
              package: true
            }
          };

            web3ModalRef.current = new Web3Modal({
              network: 'mainnet', // optional
              cacheProvider: true,
              theme: 'dark',
              providerOptions: {}, // required
            })

    },[]);

    console.log(address);
    return (
        <div className="w-full">
            <div className="w-full py-5 flex justify-between items-center">
                <div className="flex items-center">
                    <IoMenu onClick={() => setSidebar(!sidebar)} className='text-3xl xs:text-4xl md:hidden' />
                    <h1 className="text-xl xs:text-3xl font-bold text-white">{title}</h1>
                    <h5 className="text-xs font-semibold text-dark-sec ml-5 mt-[6px] hidden lg:block">How it works?</h5>
                </div>
                <div className="flex items-center">
                    <div className="px-5 hidden md:block">
                        <select name="lang" id="" className="w-20 bg-inherit cursor-pointer outline-none active:border-none">
                            <option value="">Lang</option>
                            <option value="">Eng</option>
                        </select>
                    </div>
                    <div className="xs:px-5">
                        <button onClick={!address ? walletConnector : null} className={`text-tiny xs:text-xs border-2 border-dark-pri text-white  px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold ${address ? '': 'hover:border-dark-sec hover:text-dark-sec'}`}>
                            {address ? `${address.slice(0,7)}...` : 'Connect Wallet'}
                        </button>
                    </div>
                    <div className="pl-5 text-3xl">
                        <MdLightMode className='cursor-pointer hover:text-dark-sec' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;