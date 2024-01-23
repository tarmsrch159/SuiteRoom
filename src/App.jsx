import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Service from './Components/Service'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Component and Pages
import Carousel from './Components/Carousel'
import DeluxeRoom from './Pages/DeluxeRoom'
import GrandRoom from './Pages/GrandRoom'
import PrimierCornerRoom from './Pages/PrimierCornerRoom'
import PremierSuiteRoom from './Pages/PremierSuiteRoom'
import Jacuzzi from './Pages/Jacuzzi'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      < Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/deluxeRoom" element={<DeluxeRoom />} />
        <Route path="/grandRoom" element={<GrandRoom />} />
        <Route path="/primierRoom" element={<PrimierCornerRoom />} />
        <Route path="/premierSuiteRoom" element={<PremierSuiteRoom />} />
        <Route path="/jacuzzi" element={<Jacuzzi />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  )
}

export default App
