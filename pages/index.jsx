import Image from 'next/image';
import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useContext } from "react";
import Banner from "../components/Home/Banner";
import Faq from "../components/Home/Faq";
import Feature from "../components/Home/Feature";
import Footer from "../components/Home/Footer";
import GetStarted from "../components/Home/GetStarted";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Mission from "../components/Home/Mission";
import SocialBanner from "../components/Home/Social";
import Stream from "../components/Home/Stream";
import { SidebarContext } from "../context/context";
import logo from '../assets/img/lumixnet.svg';
import { useRouter } from 'next/router';

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


const Home = () => {

    const { sidebar, setSidebar } = useContext(SidebarContext);
    const router = useRouter();
    const handleSidebar = () => {
        console.log("Onblur happended");
        setSidebar(!sidebar);
    };

    return (
        <div className="bg-[#12141D] font-home scroll-smooth">
            <div onClick={handleSidebar} className={`fixed w-full bg-transparent top-0 z-50 min-h-screen lg:hidden transition-all duration-300 ease-in-out transform ${sidebar ? 'left-0' : '-left-full'}`}>
                <div onClick={(e) => e.stopPropagation()} className={`w-[250px] h-full bg-dark-gray min-h-screen shadow-lg z-50`}>
                    <div className="relative w-full pl-4 h-20 flex items-center">
                        <Image src={logo} alt={"LuminaX Logo"} />
                        <div onClick={handleSidebar} className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer md:hidden">
                            <IoCloseSharp />
                        </div>
                    </div>
                    <ul className="w-full pl-4 pt-5">
                        {
                            navData.map((itm, idx) => (
                                <Link href={`#${itm.title.toLowerCase()}`} key={idx} passHref>
                                        <li onClick={handleSidebar} className={`group mb-5 flex items-center text-dark-pri font-bold text-sm hover:text-dark-sec cursor-pointer transition-all duration-100 ease-in-out ${router.pathname === '/' + itm.title.toLowerCase() ? 'text-dark-sec': '' }`}>
                                            <div className={`w-3 h-3 ml-1 rounded bg-dark-pri group-hover:bg-dark-sec transition-all duration-300 ease-in-out ${router.pathname === '/' + itm.title.toLowerCase() ? 'bg-dark-sec': '' }`}></div>
                                            <p className="pl-5">{itm.title}</p>
                                        </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Header />
            <Hero />
            <Mission />
            <Stream />
            <Feature />
            <Banner />
            <GetStarted />
            <Faq />
            <SocialBanner />
            <Footer />
        </div>
    )
}

export default Home;