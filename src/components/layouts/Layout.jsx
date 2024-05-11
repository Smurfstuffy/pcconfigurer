import React from 'react'
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import MobileNav from './MobileNav';
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
        <MobileNav isOpen={isOpened}/>
      </header>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}  

export default Layout