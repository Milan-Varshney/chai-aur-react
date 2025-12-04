import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false)
  const [isCharactersAllowed, setIsCharactersAllowed] = useState(false)
  const passwordRef = useRef(null)

  const passwordGeneratr = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(isNumbersAllowed) str += '1234567890'
    if(isCharactersAllowed) str += '`~!@#$%^&*()-_[]{}\|'

    for(let i = 1 ; i<= length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass) 
  }, [length, isNumbersAllowed, isCharactersAllowed, setPassword])

  useEffect(()=> {
    passwordGeneratr()
  }, [length, isNumbersAllowed, isCharactersAllowed, setPassword])

  const numberHandler = () => {
    setIsNumbersAllowed((prevValue)=> { return !prevValue})
  }

  const characterHandler = () => {
    setIsCharactersAllowed((prevValue)=> {return !prevValue})
  }

  const copyToClipBoard = ()=> {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div>
        <input type='text' value={password} readOnly placeholder='Password' ref={passwordRef}></input>
        <button onClick={copyToClipBoard}>Copy</button>
      </div>
      <div>
          <input type='range' min={6} max={20} value={length} onChange={(e) => {setLength(e.target.value)}}></input>
          <label htmlFor="">{length}</label>

          <input type="checkbox" name="" id="" onClick={numberHandler} />
          <label htmlFor="">Number</label>  
           <input type="checkbox" name="" id="" onClick={characterHandler}/>
          <label htmlFor="">Characters</label>  
      </div>
    </>
  )
}

export default App
