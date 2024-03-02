import React, { useState } from 'react'
import { Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText,useMediaQuery,useTheme} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Categories","Products","Cart","Login","SignUp"];

export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState(false)
    
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        >
            <List>
                {
                    PAGES.map((page, index) => (
                        <ListItemButton sx={{fontFamily:'cursive'}} key={index} onClick={()=>setOpenDrawer(false)}>
                            <ListItemIcon >
                                <ListItemText sx={{fontFamily:'cursive'}}>
                                    {page}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
        <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}
