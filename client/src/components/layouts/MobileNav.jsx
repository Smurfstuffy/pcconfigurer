import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUserContext } from "../../hooks/UserContex";

const MobileNav = ({ isOpen }) => {
  const { user, logout } = useUserContext();

  if (!isOpen) return;

  return (
    <div className='flex flex-col items-center bg-indigo-950 text-xl font-bold py-2'>
      <NavLink to='/' className='text-white hover:text-amber-400'>Home</NavLink>
      <NavLink to='configuration' className='text-white hover:text-amber-400'>Configuration</NavLink>
      <NavLink to='usersbuilds' className='text-white hover:text-amber-400'>User's Builds</NavLink>
      {user ?
        <button className="secondary-button px-2 mt-4" onClick={() => logout()}>Logout</button>
        :
        <>
          <NavLink to='/signin' className='text-white hover:text-amber-400'>Sign In</NavLink>
          <NavLink to='/signup' className='text-white hover:text-amber-400'>Sign Up</NavLink>
        </>
      }

    </div>
  )
}

export default MobileNav