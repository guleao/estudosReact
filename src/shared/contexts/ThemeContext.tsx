import { createContext, useState, useMemo, useCallback, useContext } from "react";
import { ThemeProvider, Box } from '@mui/material';

import { LightTheme } from "../themes/light";
import { DarkTheme } from "../themes/dark";

interface IThemeContextData {

    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

interface IAppThemProviderProps {
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemProviderProps> = ({children}) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    
    const toggleTheme = useCallback(() => { setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')}, []);

    const theme = useMemo(() => {
        if(themeName === 'light')return LightTheme;

        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={DarkTheme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>    
        </ThemeContext.Provider>
    )
}