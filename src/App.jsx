import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='h-screen w-full text-white'>

   <Navbar/>
   <LandingPage/>
   <Marquee/>
  <About/>
<Eyes/>
<Featured/>
<Footer/>
    </div>
  )
}

export default App