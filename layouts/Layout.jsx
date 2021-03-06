import Sidebar from "../components/Sidebar";
import { useSidebarContext } from "../context/sidebarProvider";

const Layout = ({ children }) => {

    const { sidebar, setSidebar } = useSidebarContext();

    const handleOnBlur = () => {
        console.log("Onblur happended");
        setSidebar(!sidebar);
    };

    return (
        <div className="w-full flex scroll-smooth">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div onClick={handleOnBlur} className={`absolute w-full bg-transparent top-0 z-50 min-h-full md:hidden transition-all duration-300 ease-in-out transform ${sidebar ? 'left-0' : '-left-full'}`}>
                <Sidebar closeClicked={() => setSidebar(prev => !prev)} />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default Layout;