import Image from "next/image";
import Link from "next/link";

// Importing assets
import binance from '../../assets/binance.png';
import logo from '../../assets/img/lumixnet.svg';


const Footer = () => {

    return (
        <div className="px-[10%] mt-20 pb-16">
            <div className="md:flex gap-5 justify-between">
                <div className="mb-10 md:mb-0">
                    <Image src={logo} alt="Logo" />
                </div>
                <div className="mb-10 md:mb-0">
                    <h2 className="font-bold text-sm text-dark-white">About</h2>
                    <p className="text-sm md:w-44 mt-4 text-white/70">
                        Lumix is a deflationary high reward contract powering entertainment on the BSC network. 
                    </p>
                </div>
                <div className="mb-10 md:mb-0">
                    <h2 className="font-bold text-sm text-dark-white">Links</h2>
                    <ul className="text-sm text-white/70 mt-4">
                        <li className="mb-2">
                            <Link href={'#'}>
                                Mission
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href={'#'}>
                                Buy Lumix
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href={'#'}>
                                Join Telegram
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href={'#'}>
                                How
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="font-bold text-sm text-dark-white">Powered by</h2>
                    <div className="mt-4">
                        <Image src={binance} alt={'Binance Chain Logo'} width={150} height={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;