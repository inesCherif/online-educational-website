import React from 'react'
import Back from "../common/back/Back"
import FormationEnLigne from './FormationEnLigne'
import FormationsCard from './FormationsCard'

const FormationHome = () => {
  return (
    <div>
      <Back title="Découvrir Les Formations"/>
      <FormationsCard />
      <FormationEnLigne />
    </div>
  )
}

export default FormationHome
