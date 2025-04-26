import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './Context/BudgetsContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BudgetsProvider>
    <App />
      </BudgetsProvider>  
  </StrictMode>,
)
