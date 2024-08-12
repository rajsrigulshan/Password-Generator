/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react"


function App() {
  const [password,setPassword]=useState("")
  const [passwordLength,setPasswordLength]=useState(8);
  const [isNumberSelected,setNumSlectedFlag]=useState(false);
  const [isCharacterSelected,setCharSelectedFlag]=useState(false);

  
  const passwordGenerator=function(){
        let  passwordString="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        if(isNumberSelected)
          passwordString += "1234567890"
        if(isCharacterSelected)
          passwordString += "~!@#$%^&*()?/.,<>{}[]+=-_`"
        let newPassword="";
        for(let i=0;i<passwordLength;i++){
            newPassword+=passwordString[Math.floor(Math.random()*passwordString.length)];
        }
        console.log(newPassword+"   this is")

        setPassword(newPassword);
  }
  
useEffect(()=>{
  passwordGenerator()
},[passwordLength,isNumberSelected,isCharacterSelected]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center my-2'>Password generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text"
              value={password}
              className='outline-none w-full py-0.5 px-3'
              placeholder='password'
              readOnly />

              <button className="bg-blue-700 text-white px-3 py-1 outline-none shrink-0">
                copy
              </button>
            </div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input 
                type="range"
                min={8}
                max={50}
                value={passwordLength}
                className="cursor-pointer"
                onChange={(e)=>{setPasswordLength(e.target.value)}}
                />
                <label >Length:{passwordLength}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input 
                type="checkbox" 
                defaultChecked={isNumberSelected}
                id="numberInput"
                onChange={()=>{setNumSlectedFlag((prev)=> !prev)}}
                />
                <label>Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input 
                type="checkbox" 
                defaultChecked={isCharacterSelected}
                id="numberInput"
                onChange={()=>{setCharSelectedFlag((prev)=> !prev)}}
                />
                <label>Characters</label>
              </div>
            </div>
      </div>
    </>
  )
}

export default App
