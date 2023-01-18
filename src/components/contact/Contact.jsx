import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <div>
        <Back title="Contacter Nous"/>
        <section className='contact padding'>
            <div className='container shadow flexSB'>
                <div className='left row'>
                <iframe src={map}></iframe>
                </div>
                <div className="right row">
                  <h1>Contacter Nous</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="items grid2">
                    <div className="box">
                      <h4>ADDRESS: </h4>
                      <p>7025 sounine 35ème batimant, étage 4 sousse France 10000</p>
                    </div>
                    <div className="box">
                      <h4>Email: </h4>
                      <p>hal.consulting2023@gmail.com</p>
                    </div>
                    <div className="box">
                      <h4>PHONE: </h4>
                      <p>+216 55 915 875</p>
                    </div>
                  </div>
                  <form action="">
                    <div className="flexSB">
                      <input type="text" placeholder='Nom&Prénom'/>
                      <input type="email" placeholder='Email'/>
                    </div>
                    <input type="text" placeholder='Subject'/>
                    <textarea cols="30" rows="10" placeholder='Ecrire Votre Message Içi... '>
                    </textarea>
                    <button className='primary-btn'>ENVOYER MESSAGE</button>
                  </form>
                  <h3>Follow Us Here</h3>
                  <span>FACEBOOK TWITTER INSTAGRAM YOUTUBE</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact