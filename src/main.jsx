import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MyContextProvider } from './context/CartContext'
import { APIProvider } from './context/APIContext'
import { UserContextProvider } from './context/UserContext'
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
