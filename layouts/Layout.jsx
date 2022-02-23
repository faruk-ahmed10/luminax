import Sidebar from "../components/Sidebar";



const Layout = ({children}) => {

    return (
        <div className="w-full flex">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="w-full px-8">
                {children}
            </div>
        </div>
    )
}

export default Layout;