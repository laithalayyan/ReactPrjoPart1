import React, { useState } from 'react'
import { AppBar, Drawer, Toolbar, Typography,useMediaQuery,useTheme } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DrawerComp from './DrawerComp';
import { MarginRounded } from '@mui/icons-material';
const PAGES = ["Categories","Products","Cart"];

export default function Navbar2() {
  const [value,setValue] = useState();
  const theme = useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <React.Fragment sx={{paddingTop:"100px"}}>
        <AppBar sx={{background:"#063970"}}>
            <Toolbar>
                <LocalMallIcon/>
                <Typography sx={{fontSize:'1.5rem',paddingLeft:'2%',fontFamily:'cursive'}}>
                            Shop
                            </Typography>
                {
                    isMatch  ? (
                        <>
                            <DrawerComp/>
                        </>
                        
                    ):(
                        <>
                <Tabs sx={{marginLeft:'auto',color:'white'}} textColor="inherit" value={value} onChange={(e,value)=> setValue(value)} indicatorColor="primary">
                    {
                        PAGES.map((page,index)=>(
                            <Tab sx={{color:'white',fontFamily:'cursive'}} key={index} label={page}/>
                        ))
                    }
                </Tabs>
                <Button sx={{marginLeft:"auto",fontFamily:'cursive'}} variant="contained">Login</Button>
                <Button sx={{marginLeft:"10px",fontFamily:'cursive'}} variant="contained">SignUp</Button>
                        </>
                    )
                }
                
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}
