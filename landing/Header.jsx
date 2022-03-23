import Image from 'next/image';
import logo1 from '../assets/logo1.svg';

const Header = () => {
    
    const menuItems = ['Whitepaper', 'Token', 'Economy', 'Roadmap', 'Ecosystem'];

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center py-5 px-3 md:pl-10">
                <div className="w-full md:w-auto h-full flex items-center justify-between">
                    <Image width={135} height={50} src={logo1} alt="logo" />
                    <div className="md:hidden h-full">
                        <a href="" className="px-3 transition duration-500 ease-in-out py-2 border border-opacity-50 rounded-full text-white text-xs md:text-sm hover:bg-blue">ICON? APPLY FOR IDO</a>
                    </div>
                </div>
                <div className="w-full md:w-auto overflow-x-auto pt-5 md:py-0">
                    {
                        menuItems.map((v, idx) => <a className="text-white transition duration-500 ease-in-out font-primary px-3 first:pl-0 cursor-pointer hover:text-blue hover:font-semibold" key={idx}>{v}</a>)
                    }
                </div>
                <div className="hidden md:block">
                    <a href="" className="px-7 transition duration-500 ease-in-out py-4 border border-opacity-50 rounded-full text-white text-sm hover:bg-blue">ICON? APPLY FOR IDO</a>
                </div>
            </div>
        </div>
    )
};
export default Header;