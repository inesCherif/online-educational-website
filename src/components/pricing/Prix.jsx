import React from 'react'
import "./prix.css"
import Back from '../common/back/Back'
import PrixCard from './PrixCard'
import Faq from './Faq'

const Prix = () => {
  return (
    <>
    <Back title="Choisir Le Bon Plan"/>
      <section className="price padding">
        <div className="container grid">
            <PrixCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Prix
