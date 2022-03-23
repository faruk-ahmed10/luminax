import { useRef, useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import { useContext } from 'react';
import { SidebarContext } from '../../context/context';
import Web3 from 'web3';    
import Web3Modal from 'web3modal';
import { getProvider } from '../../web3client/web3modal';
import { checkConnection, init } from '../../web3client';
import { toast, ToastContainer } from 'react-toastify';


let web3;

const Header = ({title}) => {


    const { sidebar, setSidebar, walletAddrs, setWalletAddrs } = useContext(SidebarContext);
    
    

    const web3Connector = async () => {
        await init();
        if(checkConnection()){
            setWalletAddrs(checkConnection());
        }
    };



    useEffect(() => {
            if(localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')){
                web3Connector();
            }else{
                toast.info('Your wallet is not connected');
            }
    
    },[]);


    return (
        <div className="w-full">
            <ToastContainer theme='dark' />
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
                        <button onClick={!walletAddrs ? web3Connector : null} className={`text-tiny xs:text-xs border-2 border-dark-pri text-white  px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold ${walletAddrs ? '': 'hover:border-dark-sec hover:text-dark-sec'}`}>
                            {walletAddrs ? `${walletAddrs.slice(0,5)}...${walletAddrs.slice(-5)}` : 'Connect Wallet'}
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