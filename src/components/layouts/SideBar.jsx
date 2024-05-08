import React from 'react'
import { NavLink } from 'react-router-dom';

const SideBar = ({ isOpen }) => {
  if (!isOpen) return;

  return (
    <div className='flex flex-col items-center bg-indigo-800 text-xl font-bold py-2'>
      <NavLink to='/' className='hover:text-amber-500'>Home</NavLink>
      <NavLink to='configuration' className='hover:text-amber-500'>Configuration</NavLink>
      <NavLink to='usersbuilds' className='hover:text-amber-500'>User's Builds</NavLink>
      <NavLink to='/signin' className='hover:text-amber-500'>Sign In</NavLink>
      <NavLink to='/signup' className='hover:text-amber-500'>Sign Up</NavLink>
    </div>
  )
}

export default SideBar