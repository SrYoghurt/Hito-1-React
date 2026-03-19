import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MyContextProvider } from './context/CartContext.jsx'
import { APIProvider } from './context/APIContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <APIProvider>
        <UserContextProvider>
          <MyContextProvider>
            <App />
          </MyContextProvider>
        </UserContextProvider>
      </APIProvider>
    </BrowserRouter>
  </StrictMode>,
)
