import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Contactus from './components/Contactus'
import Register from './components/Register'
import Rings from './components/Rings'
import Earrings from './components/Earrings'
import Chokers from './components/Chokers'
import Bangles from './components/Bangles'
import Bracelets from './components/Bracelets'
import Bestsellers from './components/Bestsellers'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Routes>
          <Route path="/" element={<Navbar/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/chokers" element={<Chokers />} />
          <Route path="/bangles" element={<Bangles/>} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          
        </Routes>
        
        </div>
    </>
  )
}

export default App
