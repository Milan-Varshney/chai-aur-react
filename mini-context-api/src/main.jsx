import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import {Layout, Home, Login, Profile} from './components/'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "profile",
          element: <Profile />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={route}></RouterProvider>
    </UserContextProvider>
  </StrictMode>,
)
