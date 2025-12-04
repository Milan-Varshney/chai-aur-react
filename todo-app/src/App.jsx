import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './component/Header'
import { TodoItem } from './component/TodoItem'
import './styles.css'
import { Button } from './component/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='todo-container'>
      <Header></Header>
      <TodoItem itemName="Eat"></TodoItem>
      <TodoItem itemName="CODE"></TodoItem>
      <TodoItem itemName="SLEEP"></TodoItem>
      <TodoItem itemName="REPEAT"></TodoItem>
      <Button></Button>
      </div>
    </>
  )
}

export default App
