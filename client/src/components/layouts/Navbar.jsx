import { NavLink } from "react-router-dom";
import { useUserContext } from "../../hooks/UserContex";

const Navbar = ({ toggleOpened }) => {
  const { user, logout } = useUserContext();
  return (
    <nav className='navbar'>
      <div className='flex text-xl md:text-2xl text-white cursor-default'>
        <section className='text-amber-400 font-bold'>PC</section><section className='font-bold'>Configurer</section>
        <NavLink to='/' className='hidden md:block ml-4 hover:text-amber-400'>Home</NavLink>
        <NavLink to='configuration' className='hidden md:block ml-4 hover:text-amber-400'>Configuration</NavLink>
        <NavLink to='usersbuilds' className='hidden md:block ml-4 hover:text-amber-400'>User's Builds</NavLink>
      </div>
      <div className='text-base text-white hidden md:block'>
        {user ?
          <div className="flex">
            <p className="text-amber-400 text-2xl cursor-default mr-2">{user.username}</p>
            <button className="secondary-button px-2" onClick={() => logout()}>Logout</button>
          </div>
          :
          <>
            <NavLink to='/signin' className='mr-2 hover:text-amber-400'>Sign In</NavLink>
            <NavLink to='/signup' className='hover:text-amber-400'>Sign Up</NavLink>
          </>
        }
      </div>
      <div className='text-2xl text-white font-bold hover:text-amber-400 block md:hidden cursor-pointer' onClick={toggleOpened}>=</div>
    </nav>
  )
}

export default Navbar