import { useState, createContext, useReducer, useContext } from 'react';

export const SidebarContext = createContext();
export const useSidebarContext = () => useContext(SidebarContext);

const SidebarProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    
    return (
        <SidebarContext.Provider value={{sidebar, setSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
};

export default SidebarProvider;