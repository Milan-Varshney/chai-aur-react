import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomButton from './components/CustomButton'

function App() {
    const [pageColor, setBgColor] = useState("white")
  

  return (
    <>
      <div style={{backgroundColor: pageColor, height: "100vh", width: "100%" }}>
        <div  style={{display: "flex", gap: "40px", backgroundColor: "white", borderRadius: "20px"}}>
          <CustomButton onClick={() =>  setBgColor("red")} text="Red" bgColor="red"/>
          <CustomButton onClick={() =>  setBgColor("green")} text="Green" bgColor="green"/>
          <CustomButton onClick={() =>  setBgColor("blue")} text="Blue" bgColor="blue"/>
          <CustomButton onClick={() =>  setBgColor("olive")} text="Olive" bgColor="olive"/>
          <CustomButton onClick={() =>  setBgColor("gray")} text="Gray" bgColor="gray"/>
          <CustomButton onClick={() =>  setBgColor("yellow")} text="Yellow" bgColor="yellow"/>
          <CustomButton onClick={() =>  setBgColor("pink")} text="Pink" bgColor="Pink"/>
          <CustomButton onClick={() =>  setBgColor("purple")} text="Purple" bgColor="Purple"/>
          <CustomButton onClick={() =>  setBgColor("lavender")} text="Lavender" bgColor="lavender"/>
          <CustomButton onClick={() =>  setBgColor("white")} text="White" bgColor="White"/>
          <CustomButton onClick={() =>  setBgColor("black")} text="Black" bgColor="Black"/>
        </div>
      </div>
    </>
  )
}

export default App
