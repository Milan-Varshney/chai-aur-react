import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () =>{
    console.log('aaya')
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    console.log("gaya")
  }

  const sutractValue = () =>{
    setCount(count-1)
  }
  return (
    <>
      <p>Hey this is counter</p>
       <button onClick={addValue}>Add</button>
       <p>{count}</p>
       <button onClick={sutractValue}>Subtract</button>

    </>
  )
}

export default App
