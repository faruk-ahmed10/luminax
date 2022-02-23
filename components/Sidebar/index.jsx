import Image from "next/image"
import logo from "../../assets/img/logo.svg"
import { IoDocumentTextOutline } from 'react-icons/io5'
import { BiShoppingBag } from 'react-icons/bi'
import { RiFacebookCircleLine, RiTwitterLine } from 'react-icons/ri';
import { BsInstagram, BsExclamationCircle } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import Link from 'next/link';

import binance from '../../assets/img/binance.svg';
import digibyte from '../../assets/img/digibyte.svg';


const Sidebar = () => {
    return (
        <div className={`w-[250px] h-full bg-dark-gray min-h-screen shadow-lg`}>
            <div className="w-full pl-4 h-20 flex items-center">
                <Image src={logo} alt={"LuminaX Logo"} />
            </div>
            <ul className="w-full pl-4 pt-5">
                {
                    ['Swap', 'Faucet', 'Reservoir'].map((itm, idx) => (
                        <Link href={itm.toLowerCase()} key={idx}>
                            <a>
                                <li className="group mb-5 flex items-center text-dark-pri font-bold text-sm hover:text-dark-sec cursor-pointer transition-all duration-100 ease-in-out">
                                    <div className="w-3 h-3 ml-1 rounded bg-dark-pri group-hover:bg-dark-sec transition-all duration-300 ease-in-out"></div>
                                    <p className="pl-5">{itm}</p>
                                </li>
                            </a>
                        </Link>
                    ))
                }
            </ul>
            <ul className="w-full pl-4 border-t border-dark-pri border-opacity-20 pt-5">
                {
                    [{title: 'Whitepaper', icon: <IoDocumentTextOutline />}, {title: 'Buy LUMIX', icon: <BiShoppingBag />}, {title: 'Tutorial', icon: <FaChalkboardTeacher />}, { title: 'About', icon: <BsExclamationCircle />}].map((itm, idx) => (
                        <li key={idx} className="mb-5 flex items-center font-bold text-dark-pri text-sm hover:text-dark-sec cursor-pointer transition-all duration-100 ease-out">
                            <div className="text-xl rounded">
                                {itm.icon}
                            </div>
                            <p className="pl-4">{itm.title}</p>
                        </li>
                    ))
                }
            </ul>
            <ul className="w-full pl-4 border-t border-dark-pri border-opacity-20 pt-5">
                <li>
                    <button className="border-2 border-dark-ter text-dark-ter uppercase rounded text-xs py-1 px-2 font-bold mb-5">
                        coming soon
                    </button>
                </li>
                {
                    ['Artists Launchpad', 'NFT', 'Metaverse', 'Ticketing'].map((itm, idx) => (
                        <li key={idx} className="mb-5 flex items-center font-bold text-dark-pri text-sm hover:text-dark-sec cursor-pointer transition-all duration-100 ease-out">
                            <div className="text-xl rounded">
                                {<BiShoppingBag />}
                            </div>
                            <p className="pl-4">{itm}</p>
                        </li>
                    ))
                }
            </ul>
            <ul className="w-full px-4 flex justify-center border-t border-dark-pri border-opacity-20 pt-5">
                {
                    [{ icon: <RiFacebookCircleLine />, linkUrl: 'https://fb.com' }, { icon: <RiTwitterLine />, linkUrl: 'https://fb.com' }, { icon: <BsInstagram />, linkUrl: 'https://fb.com' }].map((itm, idx) => (
                        <li key={idx} className="mb-5 mx-3 flex items-center font-bold text-dark-pri text-2xl hover:text-dark-sec cursor-pointer transition-all duration-300 ease-in-out">
                            {itm.icon}
                        </li>
                    ))
                }
            </ul>
            <ul className="w-full px-4 border-t border-dark-pri border-opacity-20 py-5">
                {
                    [{ token: 'LUMIX',icon: digibyte, price: 0.4569, balance: 513.821 }, { token: 'BNB',icon: binance, price: 0.4569, balance: 513.821 }].map((itm, idx) => (
                        <li key={idx} className="mb-5 flex justify-between items-center font-bold text-white text-sm hover:text-dark-sec cursor-pointer transition-all duration-300 ease-in-out">
                            <div className="flex">
                                <div className="w-7 h-7 mr-3 text-center">
                                    <Image src={itm.icon} alt={`${itm.token} logo`} />
                                </div>
                                <div className="font-bold text-sm">{itm.price}</div>
                            </div>
                            <div className="text-right font-normal">
                                <h2 className="text-xs">~ {513.821} USDT</h2>
                                <h6 className="text-[10px] text-dark-pri">LUMIX balance</h6>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar;