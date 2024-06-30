import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Option from '../Components/Option'
import AboutUs from '../Components/AboutUs'
import WhyMci from '../Components/WhyMci'
import Mci from '../Components/Mci'
import MciProductCategories from '../Components/MciProductCategories'
import CardLayout from '../Components/CardLayout'

function LandingPage() {
  return (
    <div>
       <Hero />
       <Option />
       <AboutUs />
       <WhyMci />
       <Mci />
       <MciProductCategories />
       <CardLayout />
    </div>
  )
}

export default LandingPage