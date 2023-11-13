import { Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
 
const AppRoutes = () => {

    const {toggleTheme} = useAppThemeContext();

    return (
        <Routes>
            <Route path='/' element={<Button variant='contained' onClick={toggleTheme}>Alterar Tema</Button>}/>
        </Routes>
        
    
    );
  };

export default AppRoutes;