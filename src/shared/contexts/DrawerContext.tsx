import { createContext, useState, useMemo, useCallback, useContext } from "react";

import { LightTheme } from "../themes/light";
import { DarkTheme } from "../themes/dark";

interface IDrawerContextData {

    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface IAppThemProviderProps {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IAppThemProviderProps> = ({children}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const toggleDrawerOpen = useCallback(() => { setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)}, []);


    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}