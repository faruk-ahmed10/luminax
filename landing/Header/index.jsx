import * as React from 'react';
import Image from 'next/image';
import logo1 from '../../assets/logo1.svg';
import {BiMenu} from 'react-icons/bi';
import Drawer from './Drawer';


const Header = () => {
    const [show, setShow] = React.useState();
    const menuItems = ['Whitepaper', 'Token', 'How it works', 'Roadmap', 'Ecosystem'];

    const drawerHandler = () => {
        setShow(!show);
    };
    return (
        <div className="md:container mx-auto">
            <Drawer show={show} clicked={drawerHandler} />
            <div className="md:w-full flex flex-col md:flex-row justify-between items-center pt-1 md:pl-10">
                <div className="sm:hidden md:block w-full md:w-auto py-2 h-full flex items-center justify-center">
                    <Image width={135} height={50} src={logo1} alt="logo" />
                </div>
                <div className="hidden md:block w-full md:w-auto overflow-x-auto pt-5 md:py-0">
                    {
                        menuItems.map((v, idx) => <a href={`#${v.split(' ').join('').toLowerCase()}`} className="text-white transition duration-500 ease-in-out font-primary px-3 first:pl-0 cursor-pointer hover:text-blue hover:font-semibold" key={idx}>{v}</a>)
                    }
                </div>
                <div className="px-3 bg-secondary md:bg-transparent py-2 shadow-md md:shadow-none w-full md:w-auto flex justify-between items-center">
                    <div className="md:hidden text-white text-3xl text-opacity-70"><BiMenu onClick={drawerHandler} /></div>
                    <div className="hidden sm:block md:hidden"><Image width={135} height={50} src={logo1} alt="logo" /></div>
                    <a href="" className="px-3 md:px-7 py-2 md:py-4 transition duration-500 ease-in-out border border-opacity-50 rounded-full text-white text-10px sm:text-sm hover:bg-blue">ICON? APPLY FOR IDO</a>
                </div>
            </div>
        </div>
    )
};
export default Header;