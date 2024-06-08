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
import { useState, useEffect } from 'react';

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

import PageNotFound from './components/common/ErrorPage';

const App = () => {
  const { user } = useUserContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: user ? <Home /> : <Navigate to="/signin" />,
        },
        {
          path: "configuration",
          element: user ? <Configuration /> : <Navigate to="/signin" />,
        },
        {
          path: "usersbuilds",
          element: user ? <UsersBuilds /> : <Navigate to="/signin" />,
        },
        {
          path: "usersbuilds/:id",
          element: user ? <ParticularUserBuild /> : <Navigate to="/signin" />,
        },
        {
          path: "products",
          children: [
            {
              path: "processors",
              element: user ? <Processors /> : <Navigate to="/signin" />,
            },
            {
              path: "processors/:id",
              element: user ? <Processor /> : <Navigate to="/signin" />,
            },
            {
              path: "casefans",
              element: user ? <CaseFans /> : <Navigate to="/signin" />,
            },
            {
              path: "casefans/:id",
              element: user ? <CaseFan /> : <Navigate to="/signin" />,
            },
            {
              path: "cases",
              element: user ? <Cases /> : <Navigate to="/signin" />,
            },
            {
              path: "cases/:id",
              element: user ? <Case /> : <Navigate to="/signin" />,
            },
            {
              path: "graphicalcards",
              element: user ? <GraphicalCards /> : <Navigate to="/signin" />,
            },
            {
              path: "graphicalcards/:id",
              element: user ? <GraphicalCard /> : <Navigate to="/signin" />,
            },
            {
              path: "cpucoolers",
              element: user ? <CpuCoolers /> : <Navigate to="/signin" />,
            },
            {
              path: "cpucoolers/:id",
              element: user ? <CpuCooler /> : <Navigate to="/signin" />,
            },
            {
              path: "memories",
              element: user ? <Memories /> : <Navigate to="/signin" />,
            },
            {
              path: "memories/:id",
              element: user ? <Memory /> : <Navigate to="/signin" />,
            },
            {
              path: "motherboards",
              element: user ? <MotherBoards /> : <Navigate to="/signin" />,
            },
            {
              path: "motherboards/:id",
              element: user ? <MotherBoard /> : <Navigate to="/signin" />,
            },
            {
              path: "powersupplies",
              element: user ? <PowerSupplies /> : <Navigate to="/signin" />,
            },
            {
              path: "powersupplies/:id",
              element: user ? <PowerSupply /> : <Navigate to="/signin" />,
            },
            {
              path: "storages",
              element: user ? <Storages /> : <Navigate to="/signin" />,
            },
            {
              path: "storages/:id",
              element: user ? <Storage /> : <Navigate to="/signin" />,
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
        {
          path: "*",
          element: <PageNotFound />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />
};

export default App;
