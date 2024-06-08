const ErrorPage = ({ error }) => (
  <div className='flex flex-col h-full justify-center items-center'>
    {error ?
      <div>
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          {error.response.status} {error.response.statusText}
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          {error.response.data.message}
        </h1>
      </div> :
      <h1 className="text-3xl md:text-6xl font-bold">404 Page Not Found</h1>}
  </div>
);

export default ErrorPage;