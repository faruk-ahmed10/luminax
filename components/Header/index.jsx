import { useEffect  } from 'react';
import { MdLightMode } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import { useSidebarContext } from '../../context/sidebarProvider';
import { toast, ToastContainer } from 'react-toastify';
import {  useGlobalContext } from '../../context/globalProvider';


const Header = ({title}) => {
    const { sidebar, setSidebar} = useSidebarContext();
    const { connectWallet, selectedAccount, wrongNetwork, handleSwitchNetwork, supportedChainID } = useGlobalContext();
    
    useEffect(() => {
        if(!selectedAccount) {
            if(localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')){
                connectWallet();
            }else{
                toast.info('Your wallet is not connected');
            }
        }
    }, [connectWallet, selectedAccount]);

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
                        {wrongNetwork ? 
                            (
                                <button className='text-red-600 border-2 border-dark-pri capitalize cursor-pointer px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold' onClick={() => handleSwitchNetwork(supportedChainID)}>Wrong Network</button>
                            )
                        : (
                            <button onClick={!selectedAccount ? connectWallet : null} className={`text-tiny xs:text-xs border-2 border-dark-pri text-white  px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold ${selectedAccount ? '': 'hover:border-dark-sec hover:text-dark-sec'}`}>
                                {selectedAccount ? `${selectedAccount.slice(0,5)}...${selectedAccount.slice(-5)}` : 'Connect Wallet'}
                            </button>
                        )}
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