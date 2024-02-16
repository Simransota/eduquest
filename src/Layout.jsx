import React from 'react'
import Header from './Components/Footer/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Box from '@mui/material/Box'

function Layout() {
    return (
       <>
       <Header/>
       <Box mt={4}/> {/* Add margin top to create space */}
       <Outlet/>
       {/* <Footer/> */}
       </> 
    )
}

export default Layout