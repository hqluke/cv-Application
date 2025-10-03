import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App({name, email, phone, school, major, startDate, endDate, company, position,
  description, startDateJob, endDateJob
}) {

  return (
    <>
    <div className='output'>
      <h2>Output:</h2>
      <p className='outputPara'>{name}</p>
      <p className='outputPara'>{email}</p>
      <p className='outputPara'>{phone}</p>
      <p className='outputPara'>{school}</p>
      <p className='outputPara'>{major}</p>
      <p className='outputPara'>{startDate}</p>
      <p className='outputPara'>{endDate}</p>
      <p className='outputPara'>{company}</p>
      <p className='outputPara'>{position}</p>
      <p className='outputPara'>{description}</p>
      <p className='outputPara'>{startDateJob}</p>
      <p className='outputPara'>{endDateJob}</p>
    </div>

    </>
  )
}

export default App
