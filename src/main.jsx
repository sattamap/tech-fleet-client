import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './layout/MainLayout';

import AddProduct from './pages/AddProduct/AddProduct';
import MyCart from './pages/MyCart/MyCart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import BrandProducts from './pages/BrandProducts/BrandProducts';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Update from './pages/Update/Update';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch(' https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/brand'),
      },
      {
          path: "/product",
          element: <ProtectedRoutes><AddProduct></AddProduct></ProtectedRoutes>,
      },
      {
          path: "/products/:brandName",
          element: <BrandProducts></BrandProducts>,
      },
      {
        path:"/detail/:id",
        element:<ProtectedRoutes><ProductDetail></ProductDetail></ProtectedRoutes>,
      },
      {
        path:"/update/:id",
        element: <ProtectedRoutes><Update></Update></ProtectedRoutes>,
        loader: ({params})=> fetch(` https://tech-fleet-server-nlyovz2ug-sattam-chakmas-projects.vercel.app/products/${params.id}`),
      },
      {
          path: "/cart",
          element: <ProtectedRoutes><MyCart></MyCart></ProtectedRoutes>,
          
      },
      {
          path: "/login",
          element:<Login></Login>,
         
      },
      {
          path: "/register",
          element:<Register></Register>,
         
      },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
      <RouterProvider router={router} />  
    </AuthProvider>
   
  </React.StrictMode>,
)
