import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Home from './components/pages/home/Home';
import Layout from './components/layouts/Layout';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Configuration from './components/pages/Configuration';
import UsersBuilds from './components/pages/UsersBuilds';
import { useUserContext } from './hooks/UserContex';

import Processors from './components/pages/products/Processors';
import CaseFans from './components/pages/products/CaseFans';
import Cases from './components/pages/products/Cases';
import CpuCoolers from './components/pages/products/CpuCoolers';
import GraphicalCards from './components/pages/products/GraphicalCards';
import Memories from './components/pages/products/Memories';
import MotherBoards from './components/pages/products/Motherboards';
import PowerSupplies from './components/pages/products/PowerSupplies';
import Storages from './components/pages/products/Storages';

import Processor from './components/pages/product/Processor';
import Case from './components/pages/product/Case';
import CaseFan from './components/pages/product/CaseFan';
import CpuCooler from './components/pages/product/CpuCooler';
import GraphicalCard from './components/pages/product/GraphicalCard';
import Memory from './components/pages/product/Memory';
import MotherBoard from './components/pages/product/Motherboard';
import PowerSupply from './components/pages/product/PowerSupply';
import Storage from './components/pages/product/Storage';
import Motherboard from './components/pages/product/Motherboard';

const App = () => {
  const {user} = useUserContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={user ? <Home /> : <Navigate to='/signin' />} />
          <Route path='configuration' element={user ? <Configuration /> : <Navigate to='/signin' />} />
          <Route path='usersbuilds' element={user ? <UsersBuilds /> : <Navigate to='/signin' />} />

          <Route path='/products'>
            <Route path='processors' element={user ? <Processors /> : <Navigate to='/signin' />} />
            <Route path='processors/*' element={user ? <Processor /> : <Navigate to='/signin' />} />

            <Route path='casefans' element={user ? <CaseFans /> : <Navigate to='/signin' />} />
            <Route path='casefans/*' element={user ? <CaseFan /> : <Navigate to='/signin' />} />

            <Route path='cases' element={user ? <Cases /> : <Navigate to='/signin' />} />
            <Route path='cases/*' element={user ? <Case /> : <Navigate to='/signin' />} />

            <Route path='graphicalcards' element={user ? <GraphicalCards /> : <Navigate to='/signin' />} />
            <Route path='graphicalcards/*' element={user ? <GraphicalCard /> : <Navigate to='/signin' />} />

            <Route path='cpucoolers' element={user ? <CpuCoolers /> : <Navigate to='/signin' />} />
            <Route path='cpucoolers/*' element={user ? <CpuCooler /> : <Navigate to='/signin' />} />

            <Route path='memories' element={user ? <Memories /> : <Navigate to='/signin' />} />
            <Route path='memories/*' element={user ? <Memory /> : <Navigate to='/signin' />} />

            <Route path='motherboards' element={user ? <MotherBoards /> : <Navigate to='/signin' />} />
            <Route path='motherboards/*' element={user ? <Motherboard /> : <Navigate to='/signin' />}/>

            <Route path='powersupplies' element={user ? <PowerSupplies /> : <Navigate to='/signin' />} />
            <Route path='powersupplies/*' element={user ? <PowerSupply /> : <Navigate to='/signin' />} />

            <Route path='storages' element={user ? <Storages /> : <Navigate to='/signin' />} />
            <Route path='storages/*' element={user ? <Storage /> : <Navigate to='/signin' />} />

          </Route>


        </Route>
        <Route path='/signup' element={!user ? <SignUp /> : <Navigate to='/' />}  />
        <Route path='/signin' element={!user ? <SignIn /> : <Navigate to='/' />} />
      </Route>
    )
  )


  return <RouterProvider router={router} />  
}

export default App