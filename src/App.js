import React from 'react'
import './App.css'
import Header from './components/common/heading/Header'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './components/about/About'
import FormationHome from './components/formations/FormationHome'
import Team from './components/team/Team'
import Prix from './components/pricing/Prix'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/common/footer/Footer'


const App = () => {
  return (
    <div> 
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/formations' element={<FormationHome/>}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/pricing' element={<Prix />}/>
        <Route path='/journal' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
