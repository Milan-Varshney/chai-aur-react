import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/ThemeButton'
import Card from './components/CardUi'
import { getThemeData, ThemeProvider } from './context/ContextProvider'
import React from 'react'
// code sahi kaam karega lekin usse pehle tailwind me css configuration krna hoga dark mode ke liye
// v4 me mene index.css me kiya hai
function App() {
  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=> {
    setThemeMode('light')
  }
   React.useEffect(()=> {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
   }, [themeMode])

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn></ThemeBtn>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
