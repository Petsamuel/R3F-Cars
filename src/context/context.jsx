import { createContext, useContext, useState } from 'react'

// create context for state management
export const AppContext = createContext();

// Provider component that wraps app and makes context available to children
export const AppProvider = ({ children }) => {
    const [state, setState] = useState(false);
    const [scrolls, setScroll] = useState({ pages: [0] });
    return (
        <AppContext.Provider value={{ state, setState, scrolls, setScroll }}>
            {children}
        </AppContext.Provider>
    )
}




// Hook for consuming context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an App")
    }
    return context;
}
