import { MdLightMode } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import { useContext } from 'react';
import { SidebarContext } from '../../context/context';


const Header = ({title}) => {

    const { sidebar, setSidebar } = useContext(SidebarContext);

    return (
        <div className="w-full">
            <div className="w-full py-5 flex justify-between items-center">
                <div className="flex items-center">
                    <IoMenu onClick={() => setSidebar(!sidebar)} className='text-4xl md:hidden' />
                    <h1 className="text-3xl font-bold text-white">{title}</h1>
                    <h5 className="text-xs font-semibold text-dark-sec ml-5 mt-[6px] hidden md:block">How it works?</h5>
                </div>
                <div className="flex items-center">
                    <div className="px-5 hidden md:block">
                        <select name="lang" id="" className="w-20 bg-inherit cursor-pointer outline-none active:border-none">
                            <option value="">Lang</option>
                            <option value="">Eng</option>
                        </select>
                    </div>
                    <div className="px-5">
                        <button className="text-xs border-2 border-dark-pri text-white px-4 py-3 rounded-full font-bold">
                            Connect Wallet
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