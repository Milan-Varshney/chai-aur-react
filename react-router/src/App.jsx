import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1> */}
    <Header></Header>
    <Footer></Footer>
    </>
  )
}

export default App
