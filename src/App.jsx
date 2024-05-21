import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Layout from './components/layouts/Layout';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Configuration from './components/pages/Configuration';
import UsersBuilds from './components/pages/userbuilds/UsersBuilds';
import ParticularUserBuild from './components/pages/userbuilds/ParticularUserBuild'
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

const App = () => {
  const { user } = useUserContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "configuration",
          element: <Configuration />,
        },
        {
          path: "usersbuilds",
          element: <UsersBuilds />,
        },
        {
          path: "usersbuilds/:id",
          element: <ParticularUserBuild />,
        },
        {
          path: "products",
          children: [
            {
              path: "processors",
              element: <Processors />,
            },
            {
              path: "processors/:id",
              element: <Processor />,
            },
            {
              path: "casefans",
              element: <CaseFans />,
            },
            {
              path: "casefans/:id",
              element: <CaseFan />,
            },
            {
              path: "cases",
              element: <Cases />,
            },
            {
              path: "cases/:id",
              element: <Case />,
            },
            {
              path: "graphicalcards",
              element: <GraphicalCards />,
            },
            {
              path: "graphicalcards/:id",
              element: <GraphicalCard />,
            },
            {
              path: "cpucoolers",
              element: <CpuCoolers />,
            },
            {
              path: "cpucoolers/:id",
              element: <CpuCooler />,
            },
            {
              path: "memories",
              element: <Memories />,
            },
            {
              path: "memories/:id",
              element: <Memory />,
            },
            {
              path: "motherboards",
              element: <MotherBoards />,
            },
            {
              path: "motherboards/:id",
              element: <MotherBoard />,
            },
            {
              path: "powersupplies",
              element: <PowerSupplies />,
            },
            {
              path: "powersupplies/:id",
              element: <PowerSupply />,
            },
            {
              path: "storages",
              element: <Storages />,
            },
            {
              path: "storages/:id",
              element: <Storage />,
            },
          ],
        },
        {
          path: "signup",
          element: !user ? <SignUp /> : <Navigate to="/" />,
        },
        {
          path: "signin",
          element: !user ? <SignIn /> : <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
