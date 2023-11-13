import { Routes, Route } from 'react-router-dom';
import { Button } from '@mui/material';
 
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Button variant='contained'>a</Button>}/>
        </Routes>
        
    
    );
  };

export default AppRoutes;