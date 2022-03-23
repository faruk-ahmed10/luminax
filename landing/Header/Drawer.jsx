import * as React from 'react';
import logo from '../../assets/logo1.svg';
import Image from 'next/image';
import { BsX } from 'react-icons/bs';

const Drawer = ({show, clicked}) => {
    const menuItems = ['Whitepaper', 'Token', 'Economy', 'Roadmap', 'Ecosystem'];
   
    return (
        <div onClick={clicked} className={`fixed z-30 top-0 transition duration-500 ${show ? 'right-0' : 'right-full'} min-w-full min-h-screen bg-secondary bg-opacity-50`}>
            <div onClick={e => e.stopPropagation()} className={`relative px-3 bg-primary min-h-screen w-52 flex flex-col justify-between`}>
                <BsX onClick={clicked} className="absolute top-2 right-2 text-red text-3xl" />
                <div className="py-5">
                    <Image src={logo} alt="Logo" />
                </div>
                <div className="flex flex-col">
                    {
                        menuItems.map((v, idx) => <a className="text-white text-opacity-50 transition duration-500 ease-in-out font-primary py-2 cursor-pointer hover:text-blue hover:font-semibold" key={idx}>{v}</a>)
                    }
                </div>
                <div className="py-3 text-white text-opacity-50">
                    <p className="text-xs">Copyright © 2021 Lumina.</p>
                </div>
            </div>
        </div>
    )
}

export default Drawer;