import Image from "next/image";
import Link from "next/link";

import logo from '../../assets/img/lumixnet.svg';

const navData = [
    {
        title: 'Mission'
    },
    {
        title: 'Feature'
    },
    {
        title: 'How'
    },
    {
        title: 'Artists'
    },
    {
        title: 'FAQs'
    },
    {
        title: 'Whitepaper'
    },
];


const Header = () => {


    return (
        <header className="sm:sticky top-0 shadow z-50 py-5 border-b-2 border-dark-pri/10 bg-[#12141D]">
            <div className="px-[5%] flex justify-between items-center">
                <div className="pr-10 border-r border-dark-pri/30">
                    <Image src={logo} alt="Lumix Logo" />
                </div>
                <nav className="hidden lg:block flex-1">
                    <ul className="flex text-sm font-bold text-dark-pri">
                        {
                            navData.map(itm => (
                                <li key={itm} className="mx-5 hover:text-dark-sec transition-colors duration-150 ease-out">
                                    <Link href={`#${itm.title.toLowerCase()}`}>
                                        {itm.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="text-right">
                    <button onClick={''} className="w-[102px] sm:w-auto mb-1 xs:mr-5 text-tiny xs:text-xs border-2 border-dark-pri hover:border-dark-sec text-white hover:text-dark-black hover:bg-dark-sec px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold transition-all duration-200 ease-out">
                        Buy Lumix
                    </button>
                    <button onClick={''} className="text-tiny xs:text-xs border-2 border-dark-pri hover:border-dark-sec text-white hover:text-dark-black hover:bg-dark-sec px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold transition-all duration-200 ease-out">
                        Connect Wallet
                    </button>
                </div>
            </div>
            <nav className="lg:hidden mt-5">
                <ul className="overflow-x-scroll flex justify-between text-sm font-bold text-dark-pri">
                    {
                        navData.map(itm => (
                            <li key={itm} className="mx-3 hover:text-dark-sec transition-colors duration-150 ease-out">
                                <Link href={`#${itm.title.toLowerCase()}`}>
                                    {itm.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;