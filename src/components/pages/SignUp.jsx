import { useState, useEffect } from "react"
import useFetch from "../../hooks/useFetch";
import { useUserContext } from "../../hooks/UserContex";
import { useNavigate } from "react-router-dom";

import backgroundImage from './../../img/background/PC_Components_2.jpg'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [incorrectPasswordLength, setInorrectPasswordLength] = useState(false);
  const [incorrectConfirmPassword, setInorrectConfirmPassword] = useState(false);

  const { data, error, fetchData } = useFetch();

  const { login } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      login(data);
      navigate('/');
    }
  }, [data]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 8 || password.length > 16) {
        setInorrectConfirmPassword(false);
        setInorrectPasswordLength(true);
        return;
      } else if (confirmPassword !== password) {
        setInorrectPasswordLength(false);
        setInorrectConfirmPassword(true);
        return;
      } else {
        setInorrectConfirmPassword(false);
        setInorrectPasswordLength(false);
        await fetchData(
          'http://localhost:8080/api/register',
          'post',
          {
            username: username,
            password: confirmPassword
          }

        );
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }

  }

  return (
    <div className="relative">
      <img src={backgroundImage} alt="PC_Components_2" className="w-screen object-cover h-screen" />
      <div className='flex flex-col h-screen justify-center items-center absolute inset-0'>
        <h1 className='text-3xl md:text-4xl font-bold text-white'>Please, Sign Up</h1>
        <div className='rounded-xl bg-gray-200 border border-gray-400 mt-2 md:mt-4'>
          <form className='flex flex-col justify-center items-center py-4 px-10 md:px-36 md:py-6'>
            <input type="text" placeholder='Username' className='input' value={username} onChange={e => setUsername(e.target.value)} />
            {error && <label className="text-base md:text-lg text-red-600">Incorrect or already used username</label>}
            <input type="password" placeholder='Password' className='input mt-4 md:mt-6' value={password} onChange={e => setPassword(e.target.value)} />
            {incorrectPasswordLength && <label className="text-base md:text-lg text-red-600">Password length must be 8-16 characters</label>}
            <input type="password" placeholder='Password (again)' className='input mt-4 md:mt-6' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            {incorrectConfirmPassword && <label className="text-base md:text-lg text-red-600">Incorrect password confirmation</label>}
            <button className='primary-button mt-4 md:mt-6 w-full text-lg md:text-2xl py-2' onClick={handleRegister}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default SignUp