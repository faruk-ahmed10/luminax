import * as React from 'react';
import Image from 'next/image';
import { FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';
import binance from '../assets/binance.png';
import logo from '../assets/logo1.svg';

const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container px-3 md:px-20 mx-auto text-center">
                <div className="py-10 md:py-28 flex flex-col md:flex-row justify-between border-b border-gray-800">
                    <div className="flex flex-col items-center justify-center">
                        <h6 className="w-full pb-5 md:pb-8 text-white text-opacity-70 md:text-left">Powered by :</h6>
                        <div className="w-40">
                            <Image src={binance} alt="Binance Logo" />
                        </div>
                    </div>
                    <div className="text-white">
                        <h6 className="pb-5 md:pb-8 pt-10 md:pt-0 text-white text-opacity-70 md:text-left">Join Social :</h6>
                        <div className="flex justify-center text-white">
                            <div className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-xl md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                                <a href="https://t.me/+JhdsbU8LGQBlNTYx" rel="noreferrer" target="_blank"><FaTelegramPlane /></a>
                            </div>
                            <div className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-xl md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                                <FaTwitter />
                            </div>
                            <div className="w-10 h-10 md:w-18 md:h-18 rounded-full p-2 mr-3 bg-cyan text-xl md:text-4xl flex justify-center items-center cursor-pointer hover:bg-blue">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-52 pb-3 pt-5">
                        <Image src={logo} alt="Logo" />
                    </div>
                    <ul className="md:hidden flex justify-center text-white text-opacity-70">
                        <li className="pr-5"><a href="#">Terms of Use</a></li>
                        <li className=""><a href="#">Privacy Policy</a></li>
                    </ul>
                    <div className="">
                        <p className="text-white text-opacity-50 py-3 md:py-10">
                            Copyright © 2021 Lumina. All Rights Reserved.
                        </p>
                    </div>
                    <ul className="hidden md:flex py-3 md:py-10 text-white text-opacity-70">
                        <li className="pr-5"><a href="#">Terms of Use</a></li>
                        <li className=""><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;