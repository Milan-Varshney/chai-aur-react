import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, ContactUs} from './components'
import User from './components/User/User.jsx'
import Github, { fetchData } from './components/Github/Github.jsx'
// bo component and uska fetchdata mtd ek sath sbke apne alg alg stansdrd h 

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />

//       },
//       {
//         path: "contact",
//         element: <ContactUs />
//       }

//     ]
//   }
// ]);

// another way to create route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route 
        loader={fetchData}
        path='github'
        element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
