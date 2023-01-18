import React from 'react'
import Facebook from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Youtube from '@mui/icons-material/YouTube';

const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <h1>HAL CONSULTING</h1>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
            <div className="social">
            <Facebook className='icon'/>
            <Instagram className='icon'/>
            <Twitter className='icon'/>
            <Youtube className='icon'/>            
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
