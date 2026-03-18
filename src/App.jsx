import './index.css'
import Navbar from './components/Navbar/Navbar'
import Pizza from './views/Pizza/Pizza'
import Cart from './views/Cart/Cart'
import Home from './views/Home/Home'
import LoginCliente from './views/LoginCliente/LoginCliente'
import RegistroCliente from './views/RegistroCliente/RegistroCliente'
import Footer from './components/Footer/Footer'
import NotFound from './views/NotFound/NotFound'
import Profile from './views/Profile/Profile'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useUserContext } from './context/UserContext'



function App() {
  const { token } = useUserContext()
  console.log('App.jsx: token =', token)
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/profile' element={token ? <Profile /> : <Navigate to='/' />} />
        <Route path='/login' element={token ? <Navigate to='/' replace /> : <LoginCliente />} />
        <Route path='/register' element={token ? <Navigate to='/' replace /> : <RegistroCliente />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

