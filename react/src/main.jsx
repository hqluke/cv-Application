import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/Style.css'
import { Title } from './components/Title.jsx'
import { Form } from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title/>
    <Form></Form>
  </StrictMode>,
)
