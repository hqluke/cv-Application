import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Style.css'
import { Title } from './components/Title.jsx'
import { Form } from './components/Form.jsx'
import App from './App.jsx'


function Root(){


  const [submittedData, setSubmittedData] = useState(null);

  function handleFormSubmit(formData) {
    setSubmittedData(formData);
  }

  return(
    <>
      <Title></Title>
      <Form onSubmit={handleFormSubmit} />
        {submittedData && <App {...submittedData}/> }
    </>
  )
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
)
