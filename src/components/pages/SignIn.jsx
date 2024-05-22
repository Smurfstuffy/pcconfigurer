import { useState, useEffect } from "react"
import useFetch from "../../hooks/useFetch";
import { useUserContext } from "../../hooks/UserContex";
import { useNavigate } from "react-router-dom";

import backgroundImage from './../../img/background/PC_Components_2.jpg'

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { data, error, fetchData } = useFetch();

  const { login } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      login(data);
      navigate('/');
    }
  }, [data]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await fetchData(
        'http://localhost:8080/api/login',
        'post',
        {
          username: username,
          password: password
        }
      );
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  }

  const handleSignUp = () => {
    navigate('/signup');
  }

  return (
    <div className="relative">
      <img src={backgroundImage} alt="PC_Components_2" className="w-screen object-cover h-screen" />
      <div className='flex flex-col h-screen justify-center items-center absolute inset-0'>
        <h1 className='text-3xl md:text-4xl font-bold text-white'>Please, Sign In</h1>
        <div className='rounded-xl bg-gray-200 border border-gray-400 mt-2 md:mt-4'>
          <form className='flex flex-col justify-center items-center py-4 px-10 md:px-36 md:py-6'>
            <input type="text" placeholder='Username' className='input' value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' className='input mt-4 md:mt-6' value={password} onChange={e => setPassword(e.target.value)} />
            {error && <label className="text-base md:text-lg text-red-600">Incorrect username or password</label>}
            <button className='primary-button mt-4 md:mt-6 w-full text-lg md:text-2xl py-2' onClick={handleLogin}>Sign In</button>
            <p className='font-semibold text-lg md:text-xl mt-4 md:mt-6'>Don't have an account?</p>
            <button className='primary-button-outline w-full mt-4 md:mt-6 text-lg md:text-2xl py-2' onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default SignIn