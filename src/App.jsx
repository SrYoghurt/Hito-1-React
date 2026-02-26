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
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pizza001' element={<Pizza />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<LoginCliente />}></Route>
        <Route path='/register' element={<RegistroCliente />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App