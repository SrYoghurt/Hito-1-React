import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import LoginCliente from './components/LoginCliente/LoginCliente'
import Navbar from './components/Navbar/Navbar'
import Pizza from './components/Pizza/Pizza'
import RegistroCliente from './components/RegistroCliente/RegistroCliente'
import './index.css'

function App() {

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      {/* <Pizza /> */}
      {/* <Cart/> */}
      {/* <Home /> */}
      <LoginCliente />
      <RegistroCliente />
      <Footer />
    </div>
  )
}

export default App