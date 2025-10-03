import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App({name, email, phone}) {

  return (
    <>
    <div className='output'>
      <h2>Output:</h2>
      <p className='outputPara'>{name}</p>
      <p className='outputPara'>{email}</p>
      <p className='outputPara'>{phone}</p>
    </div>

    </>
  )
}

export default App
