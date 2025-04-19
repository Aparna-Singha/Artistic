import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SubmissionsProvider } from './context/submissions.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SubmissionsProvider>
      <App />
    </SubmissionsProvider>
  </StrictMode>,
)
