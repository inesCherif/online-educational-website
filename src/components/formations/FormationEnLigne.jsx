import React from 'react'
import { online } from '../../data'
import Title from '../common/title/Title'

const FormationEnLigne = () => {
  return (
    <div>
      <section className='online'>
        <div className="container">
            <Title subtitle="FORMATIONS" title="Découvrir Notre Formations"/>
            <div className="content grid3">
                {online.map((val) => (
                    <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            <img src={val.hoverCover} alt="" className='show'/>
                        </div>
                        <h1>{val.courseName}</h1>
                        <span>{val.course}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default FormationEnLigne
