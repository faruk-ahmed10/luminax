import { useState } from "react";
import Sidebar from "../components/Sidebar";



const Layout = ({children}) => {

    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="w-full flex">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className={`absolute top-0 min-h-full md:hidden transition-all duration-300 ease-in-out transform ${sidebar ? 'left-0' : '-left-[250px'}`}>
                <Sidebar />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout;