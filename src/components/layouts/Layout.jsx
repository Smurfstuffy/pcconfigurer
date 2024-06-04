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
    <div className="flex flex-col h-screen">
      <header className="w-auto">
        <Navbar toggleOpened={toggleOpened} />
        <MobileNav isOpen={isOpened} />
      </header>
      <main className="flex-grow overflow-auto bg-gray-200">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout