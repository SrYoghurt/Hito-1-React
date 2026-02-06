import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import RegistroCliente from './components/RegistroCliente/RegistroCliente'
import './index.css'

function App() {

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      {/* <Home /> */}
      <RegistroCliente />
      <Footer />
    </div>
  )
}

export default App