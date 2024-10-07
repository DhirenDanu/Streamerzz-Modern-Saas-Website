import React from 'react'
import Navbar from './components/Navbar'
import Herosection  from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import KeyFeature from './components/KeyFeature'
import PricingPlan from './components/PricingPlan'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className=' text-sm text-neutral-300 antialiased ' >
      <Navbar/>
      <Herosection/>
      <HowItWorks/>
      <KeyFeature/>
      <PricingPlan/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App
