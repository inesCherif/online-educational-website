import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero/Hero'
import Hprix from './Hprix'
import Test from './testiomonal/Test'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hprix />
      <Hblog />
    </div>
  )
}

export default Home
