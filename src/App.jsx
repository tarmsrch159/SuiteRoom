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
import DeluxeRoom from './Pages/Room&Suite/DeluxeRoom'
import GrandRoom from './Pages/Room&Suite/GrandRoom'
import PrimierCornerRoom from './Pages/Room&Suite/PrimierCornerRoom'
import PremierSuiteRoom from './Pages/Room&Suite/PremierSuiteRoom'
import Jacuzzi from './Pages/Room&Suite/Jacuzzi'
import GrandBallRoom from './Pages/Banquet/GrandBallRoom'
import Pikol from './Pages/Banquet/Pikol'
import Dalan from './Pages/Banquet/Dalan'
import Chada from './Pages/Banquet/Chada'
import Onsen from './Pages/PraanSPA/Onsen'
import MassageThai from './Pages/PraanSPA/MassageThai'
import JacuzziSPA from './Pages/PraanSPA/JacuzziSPA'
import MassageFoot from './Pages/PraanSPA/MassageFoot'
import MassageOil from './Pages/PraanSPA/MassageOil'
import ThaiHouse from './Pages/RUEN/ThaiHouse'
import FoodRoom from './Pages/RUEN/FoodRoom'


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
        <Route path="/grandBallRoom" element={<GrandBallRoom />} />
        <Route path="/pikol" element={<Pikol />} />
        <Route path="/dalan" element={<Dalan />} />
        <Route path="/chada" element={<Chada />} />
        <Route path="/Onsen" element={<Onsen />} />
        <Route path="/massageThai" element={<MassageThai />} />
        <Route path="/JacuzziSPA" element={<JacuzziSPA />} />
        <Route path="/MassageFoot" element={<MassageFoot />} />
        <Route path="/MassageOil" element={<MassageOil />} />
        <Route path="/ThaiHouse" element={<ThaiHouse />} />
        <Route path="/FoodRoom" element={<FoodRoom />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  )
}

export default App
