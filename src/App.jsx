import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Componant/About'
import Home from './Componant/Home'
import Navbar from './Componant/Navbar'
import Contact from './Componant/Contact'
import Footer from './Componant/Footer'
import ErrorPage from './Componant/ErrorPage'
import Shop from './Componant/Shop'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
