import { Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDrawerContext } from '../shared/contexts';
 
const AppRoutes = () => {

    const {toggleDrawerOpen} = useDrawerContext();

    return (
        <Routes>
            <Route path='/' element={<Button variant='contained' onClick={toggleDrawerOpen}>Puxar</Button>}/>
        </Routes>
        
    
    );
  };

export default AppRoutes;