import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-sky-700 text-white p-4 rounded-lg text-center">
        Hello Duniya
      </h1> 
      <Card channel='Milan' />
         </>

  )
}

export default App
