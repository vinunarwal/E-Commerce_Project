import React from 'react'
import  Navbar from './F_Website/Navbar';
import Fother from './F_Website/Fother';
import {Outlet} from 'react-router-dom';





import First_page from './F_Website/First_page';
import Second_page from './F_Website/Second_page';
import Fourth_page from '../src/F_Website/Fourth_page';
// import Fother from './F_Website/Fother';

import Sixth_page from '../src/F_Website/Sixth_page'
import Sevnth_page from './F_Website/Sevnth_page';

import Eight_page from './F_Website/Eight_page';
import Fifth_page from './F_Website/Fifth_page';
import Tenth_page from './F_Website/Tenth_page'
import '../src/MYcss/Responsive.css';




function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Fother/>
    
    </>
  )
}

export default Layout