import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import './App.css'
import Card from './component/card/Card'
import Car from './component/car section/Car'
import HowItWorks from './component/main-title/HowItWorks'
import Pricing from './component/Pricings/Pricing'
import ClientSay from './component/Client-Say/ClientSay'
import Booking from './component/booking/Booking'
import Footer from './component/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>    
    
      <Navbar />
      <Hero />
      <Card />
      <Car />
      <HowItWorks />
      <Pricing />
      <ClientSay />
      <Booking />
      <Footer />
    </>
  )
}

export default App
