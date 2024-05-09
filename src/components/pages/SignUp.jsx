const SignUp = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-indigo-900'>
    <h1 className='text-3xl md:text-4xl font-bold text-white'>Please, Sign Up</h1>
    <div className='rounded-xl bg-gray-200 border-gray-200 mt-2 md:mt-4'>
      <form className='flex flex-col justify-center items-center py-4 px-10 md:px-36 md:py-6'>
        <input type="text" placeholder='Username' className='input' />
        <input type="password" placeholder='Password' className='input mt-4 md:mt-6' />
        <input type="password" placeholder='Password (again)' className='input mt-4 md:mt-6' />
        <button className='primary-button mt-4 md:mt-6 w-full text-lg md:text-2xl py-2'>Sign Up</button>
      </form>
    </div>
  </div>
  )
}

export default SignUp