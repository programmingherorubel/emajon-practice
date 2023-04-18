import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import './index.css';
import Orders from './components/Orders';
import Inventory from './components/Inventory';
import Login from './components/Login';
import dataLoader from './components/Loader/CartProductsLoader';
import Reg from './components/Reg';
import AuthProviders from './components/Context/AuthProviders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
          {
            path:'/',
            element:<Shop />
          },
          {
            path:'/orders',
            element:<Orders/>,
            loader:dataLoader
          },
          {
            path:'/inventory',
            element:<PrivateRoute><Inventory/></PrivateRoute>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/reg',
            element:<Reg></Reg>
          }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProviders>
      <RouterProvider  router={router}></RouterProvider>
    </AuthProviders>
)
