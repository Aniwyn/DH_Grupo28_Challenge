import React, { useState, useEffect } from 'react'

import professionsService from '../services/professionsService'
import ProfessionLabel from "../components/ProfessionLabel"

function Professions() {
  const [professions, setProfessions] = useState({ data: [] })

  useEffect(() => {
    professionsService
      .getAll()
      .then(professions => setProfessions(professions))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="flex flex-col bg-gray-100 h-full w-full px-7 pt-6">
      <h1 className="text-gray-600 text-2xl">Profesiones</h1>
      <ul className="w-[750px] bg-white rounded-lg self-center">
        <li className="text-center text-white bg-blue-600 rounded-t-lg font-bold text-lg py-2 mt-2">Listado de profesiones</li>
        {professions.data.map(profession => {
          return <ProfessionLabel key={profession.id} profession={profession.name}></ProfessionLabel>
        })}
      </ul>
    </div>
  )
}

export default Professions