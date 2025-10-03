import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Style.css'
import { Title } from './components/Title.jsx'
import { PersonalInformation } from './components/PersonalInformation.jsx'
import App from './App.jsx'
import { Education } from './components/Education.jsx'


function Root(){


  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState(null);

  function handlePersonalForm(formData) {
    setPersonalData(formData);
  }

  function handleEducationForm(formData) {
    setEducationData(formData);
  }

  return(
    <>
      <Title></Title>
      <PersonalInformation onSubmit={handlePersonalForm} />
      <Education onSubmit={handleEducationForm}/>
        {(personalData || educationData) && <App {...personalData} {...educationData}/> }
    </>
  )
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
)
