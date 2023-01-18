import React from 'react'
import "./team.css"
import Back from '../common/back/Back'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div>
    <Back title="Equipe"/>
      <section className='team padding'>
        <div className="container grid">
            <TeamCard />
        </div>
      </section>
    </div>
  )
}

export default Team
