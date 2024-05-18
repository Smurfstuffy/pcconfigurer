import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/layouts/Layout';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Configuration from './components/pages/Configuration';
import { UserProvider } from './hooks/UserContex';
import Processors from './components/pages/products/Processors';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='configuration' element={<Configuration />}/>
          <Route path='products/processors' element={<Processors />}/>
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Route>
    )
  )

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App