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
import CaseFans from './components/pages/products/CaseFans';
import Cases from './components/pages/products/Cases';
import CpuCoolers from './components/pages/products/CpuCoolers';
import GraphicalCards from './components/pages/products/GraphicalCards';
import Memories from './components/pages/products/Memories';
import MotherBoards from './components/pages/products/Motherboards';
import PowerSupplies from './components/pages/products/PowerSupplies';
import Storages from './components/pages/products/Storages';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='configuration' element={<Configuration />}/>
          <Route path='products/processors' element={<Processors />}/>
          <Route path='products/casefans' element={<CaseFans />}/>
          <Route path='products/cases' element={<Cases />}/>
          <Route path='products/graphicalcards' element={<GraphicalCards />}/>
          <Route path='products/cpucoolers' element={<CpuCoolers />}/>
          <Route path='products/memories' element={<Memories />}/>
          <Route path='products/motherboards' element={<MotherBoards />}/>
          <Route path='products/powersupplies' element={<PowerSupplies />}/>
          <Route path='products/storages' element={<Storages />}/>
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