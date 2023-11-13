import { Drawer, Box, useTheme, Avatar, Divider, List, Icon } from "@mui/material"
import { ListItemButton, ListItemIcon, ListItemText, } from "@mui/material"

interface IAppMenuLateral {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IAppMenuLateral> = ({children}) => {

    const theme = useTheme();

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar 
                        sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                        src="https://i.pinimg.com/originals/17/55/eb/1755eb08849286c240a4cb5a387fbca8.jpg"/>
                    </Box>
                

                    <Divider/>

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Inicio"/>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>more_horiz</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Sobre"/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
        
            <Box height="100vh" marginLeft={theme.spacing(60)}>
                {children}
            </Box>
        </>
    );
};