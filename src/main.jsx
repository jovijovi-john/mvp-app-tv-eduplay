import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuestionStateProvider } from './QuestionState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionStateProvider>
      <App />
    </QuestionStateProvider>
  </StrictMode>,
)
