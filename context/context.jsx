import { useState, createContext, useReducer } from 'react';


export const SidebarContext = createContext();


const SidebarProvider = ({ children }) => {

    const [sidebar, setSidebar] = useState(false);
    console.log("Sidebar", sidebar);
    return (
        <SidebarContext.Provider value={{sidebar, setSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
};

export default SidebarProvider;