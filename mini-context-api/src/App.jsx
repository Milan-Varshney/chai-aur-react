import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
    const [pageColor, setBgColor] = useState("white")
  

  return (
    <UserContextProvider> 
      <h1>Hello world</h1>
    </UserContextProvider>
  )
}

export default App
