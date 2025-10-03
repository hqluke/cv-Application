import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Style.css'
import { Title } from './components/Title.jsx'
import { PersonalInformation } from './components/PersonalInformation.jsx'
import App from './App.jsx'
import { Education } from './components/Education.jsx'
import { JobExperience } from './components/JobExperience.jsx'


function Root(){


  const [personalData, setPersonalData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [jobData, setJobData] = useState(null);

  function handlePersonalForm(formData) {
    setPersonalData(formData);
  }

  function handleEducationForm(formData) {
    setEducationData(formData);
  }

  function handleJobForm(formData) {
    setJobData(formData);
  }

  return(
    <>
      <Title></Title>
      <PersonalInformation onSubmit={handlePersonalForm} />
      <Education onSubmit={handleEducationForm}/>
      <JobExperience onSubmit={handleJobForm}/>
        {(personalData || educationData || setJobData) && <App {...personalData} {...educationData} {...jobData} /> }
    </>
  )
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
)
