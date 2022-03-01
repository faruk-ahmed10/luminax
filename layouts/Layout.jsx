import { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { SidebarContext } from "../context/context";



const Layout = ({children}) => {

    const { sidebar, setSidebar } = useContext(SidebarContext);

    return (
        <div className="w-full flex">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div onBlur={() => setSidebar(prev => !prev)} className={`absolute top-0 z-50 min-h-full md:hidden transition-all duration-300 ease-in-out transform ${sidebar ? 'left-0' : '-left-[250px]'}`}>
                <Sidebar closeClicked={() => setSidebar(prev => !prev)} />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout;