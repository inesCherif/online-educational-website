import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/icons-material/List';


const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=>setClick(false)}>
            <li><Link to="/">Accuille</Link></li>
            <li><Link to="/formations">Formations</Link></li>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/team">Equipe</Link></li>
            <li><Link to="/pricing">Prix</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="start">
            <div className="button">OBTENIR DES CERTIFICATIONS</div>
          </div>
          <button className='toggle' onClick={()=>setClick(!click)}>
            {click ? <CloseIcon /> : <List />}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
