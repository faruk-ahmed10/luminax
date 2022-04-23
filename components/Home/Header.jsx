import Image from "next/image";
import Link from "next/link";
import { useSidebarContext } from '../../context/sidebarProvider';
import logo from '../../assets/img/lumixnet.svg';
import { IoMenu } from "react-icons/io5";

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

    const { sidebar, setSidebar } = useSidebarContext();

    return (
        <header className="sticky top-0 w-full shadow z-40 py-3 md:py-5 border-b-2 border-dark-pri/10 bg-[#12141D]">
            <div className="px-[5%] flex justify-between items-center">

                <div className="relative md:hidden w-10 h-10">
                    <Image src={'/assets/img/shortlogo.svg'} alt="Lumix Logo" layout="fill" />
                </div>
                <div className="pr-10 border-r border-dark-pri/30 hidden md:block">
                    <Image src={logo} alt="Lumix Logo" width={200} height={60} />
                </div>
                <nav className="hidden lg:block flex-1">
                    <ul className="flex text-sm font-bold text-dark-pri">
                        {
                            navData.map(itm => (
                                <li key={`nav_menu${itm.title}`} className="mx-5 hover:text-dark-sec transition-colors duration-150 ease-out">
                                    <Link href={`#${itm.title.toLowerCase()}`}>
                                        {itm.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="text-right">
                    {/*<button onClick={''} className="w-[102px] sm:w-auto mb-1 xs:mr-5 text-tiny xs:text-xs border-2 border-dark-pri hover:border-dark-sec text-white hover:text-dark-black hover:bg-dark-sec px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold transition-all duration-200 ease-out">*/}
                    {/*    Buy Lumix*/}
                    {/*</button>*/}
                    {/*<button onClick={''} className="text-tiny xs:text-xs border-2 border-dark-pri hover:border-dark-sec text-white hover:text-dark-black hover:bg-dark-sec px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold transition-all duration-200 ease-out">*/}
                    {/*    Connect Wallet*/}
                    {/*</button>*/}
                    <button className="text-tiny xs:text-xs border-2 border-dark-pri hover:border-dark-sec text-white hover:text-dark-black hover:bg-dark-sec px-3 py-1 xs:px-6 xs:py-3 rounded-full font-bold transition-all duration-200 ease-out">
                        <a href="https://t.me/Lumix_Network" className="">Join the Telegram</a>
                    </button>

                </div>
                <IoMenu onClick={() => setSidebar(!sidebar)} className='text-4xl xs:text-4xl lg:hidden' />
            </div>
        </header>
    )
}

export default Header;
