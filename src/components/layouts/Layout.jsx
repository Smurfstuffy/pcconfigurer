import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';

const Layout = () => {
  const [isOpened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(prev => !prev);
  }

  return (
    <React.Fragment>
      <header>
        <Navbar toggleOpened={toggleOpened}/>
        <SideBar isOpen={isOpened}/>
      </header>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}  

export default Layout