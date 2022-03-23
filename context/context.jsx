import { useState, createContext, useReducer } from 'react';


export const SidebarContext = createContext();


const SidebarProvider = ({ children }) => {

    const [sidebar, setSidebar] = useState(false);
    const [walletAddrs, setWalletAddrs] = useState(null);
    
    return (
        <SidebarContext.Provider value={{sidebar, setSidebar, walletAddrs, setWalletAddrs}}>
            {children}
        </SidebarContext.Provider>
    )
};

export default SidebarProvider;