import React, { useState, useEffect } from 'react'

import professionsService from '../services/professionsService'
import ProfessionLabel from "../components/ProfessionLabel"

function Professions() {
  const [professions, setProfessions] = useState({ data: [] })

  useEffect(() => {
    professionsService
      .getAll()
      .then(professions => setApplicants(professions))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="bg-gray-100 h-full w-full px-7 pt-6">
      <h1 className="text-gray-600 text-2xl">Profesiones</h1>
      <ul className="w-[1000px] bg-white rounded-lg">
        <li className="text-center text-white bg-blue-600 rounded-t-lg font-bold text-lg py-2 mt-2">Listado de profesiones</li>
        {professions.data.map(profession => {
          <ProfessionLabel key={profession.id} profession={profession.name}></ProfessionLabel>
        })}
        <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Abogado</li>
        <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Arquitecto</li>
        <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Botánico</li>
      </ul>
    </div>
  )
}

export default Professions