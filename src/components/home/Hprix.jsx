import React from 'react'
import Title from '../common/title/Title'
import PrixCard from '../pricing/PrixCard'

const Hprix = () => {
  return (
    <>
    <section className='hprice padding'>
    <Title subtitle="Notre Prix" title="Prix & Offres"/>
            <div className="price container grid">
                <PrixCard />
            </div>
    </section>
    </>
  )
}

export default Hprix