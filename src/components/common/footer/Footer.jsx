import React from 'react'
import './footer.css'
import Paper from '@mui/icons-material/SendRounded';
import Facebook from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Youtube from '@mui/icons-material/YouTube';
import { blog } from '../../../data';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Map from '@mui/icons-material/Map';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
    <section className='newslettre'>
        <div className="container flexSB">
            <div className="left row">
                <h1>Newslettre -Stay Tuned And Get The Latest Updates</h1>
                <span>far far away, behind the word mountains</span>
            </div>
            <div className="right row">
                <input type="text" placeholder='Entrer Votre Adresse Email'/>
                <Paper className='Icon'/>
            </div>
        </div>
    </section>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>HAL CONSULTING</h1>
                <span>online education & learning</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <Facebook className='icon'/>
                <Instagram className='icon'/>
                <Twitter className='icon'/>
                <Youtube className='icon'/>
            </div>
            <div className="box link">
                <h3>Découvrir</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="box link">
                <h3>Liens Rapides</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="box">
                <h3>Nouvel Post</h3>
                {blog.slice(0,3).map((val) => {
                    return(
                    <div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                        <span>
                        <PersonIcon className='icon'/>
                        <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                        <CalendarMonth className='icon'/>
                        <label htmlFor="">{val.date}</label>
                    </span>
                    <h4>{val.title}</h4>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="box last">
                <h3>Vous Avez Une Question?</h3>
                <ul>
                    <li>
                        <Map className='icon'/>
                        7025 sounine 35ème batimant, étage 4 sousse France 10000
                    </li>
                    <li>
                        <Phone className='icon'/>
                        +216 55 915 875
                    </li>
                    <li>
                        <Email className='icon'/>
                        hal.consulting2023@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div className="legal">
        <p>Copyright @2023 All rights reserved</p>
    </div>
    </>
  )
}

export default Footer