import React from 'react' 
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Analytics from './components/Analytics.jsx'
import Newsletter from './components/Newsletter.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App

