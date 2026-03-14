import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
import './App.css'
import Card from './component/card/Card'
import Car from './component/car section/Car'
import HowItWorks from './component/main-title/HowItWorks'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>    
    
      <Navbar />
      <Hero />
      <Card />
      <Car />
      <HowItWorks />
    </>
  )
}

export default App
