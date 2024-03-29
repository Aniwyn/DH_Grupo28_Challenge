import React, { useState, useEffect } from 'react'

import professionsService from '../services/professionsService'

function Inscribe() {

  const [professions, setProfessions] = useState({ data: [] })

  useEffect(() => {
    professionsService
      .getAll()
      .then(professions => setProfessions(professions))
      .catch(error => console.error(error))
  }, [])


  return (
    <div className="px-8 pt-5">
      <h1 className="font-bold text-blue-900 text-lg">Añade un aspirante aquí...</h1>
      {/* <div className="w-100 h-[1px] bg-gray-300 my-4"></div> */}
      <form action="http://localhost:3213/api/applicants" method="post" enctype="multipart/form-data" className="flex flex-col justify-s w-full space-y-2 font- text-sm text-slate-600">
        <h2 className="mt-2 font-medium text-slate-600 text-md">Datos personales</h2>
        <div className="w-100 h-[0.5px] bg-gray-300 my-2 "></div>
        <div className="flex flex-row w-full">
          <label htmlFor="dni" className="w-1/5">D.N.I.</label>
          <input id="dni" type="text" name="dni" placeholder="Ingresa un DNI..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="last_name" className="w-1/5">Apellido</label>
          <input id="last_name" type="text" name="last_name" placeholder="Ingresa tu apellido..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="name" className="w-1/5">Nombre/s</label>
          <input id="name" type="text" name="name" placeholder="Ingresa tu nombre..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="phone" className="w-1/5">Teléfono</label>
          <input id="phone" type="text" name="phone" placeholder="Ingresa tu número de teléfono..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="gender_id" className="w-1/5">Género</label>
          <select id="gender_id" name="gender_id" className="w-1/2 border px-1 rounded-sm px-2 py-1 placeholder:ml-5 hover:border-gray-400" >
            <option value="1">Masculinno</option>
            <option value="2">Femenino</option>
            <option value="3">Otro</option>
          </select><br></br>
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="birth_date" className="w-1/5">Fecha de nacimiento</label>
          <input id="birth_date" name="birth_date" type="date" className="w-1/2 border px-1 rounded-sm px-2 py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="email" className="w-1/5">Correo electrónico</label>
          <input id="email" name="email" type="text" placeholder="Ingresa tu email..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <h2 className="pt-4 font-medium text-slate-600 text-md">Datos profesionales</h2>
        <div className="w-100 h-[0.5px] bg-gray-300 my-2 "></div>
        <div className="flex flex-row w-full">
          <label htmlFor="url_linkedin" className="w-1/5">Perfil de LinkedIn</label>
          <input id="url_linkedin" name="url_linkedin" type="text" placeholder="Ingresa tu perfil de LinkedIn..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="image" className="w-1/5">Imagen</label>
          <input id="image" name="image" type="file" placeholder="Ingresa tu fotografía..." className="w-1/2 pl-2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400 
          file:mr-4 file:py-1 file:px-2
          file:border-0
          file:text-xs file:font-md
          file:bg-violet-50 file:text-slate-700
          hover:file:bg-blue-100 file:cursor-pointer cursor-pointer
          text-xs" />
        </div>
        <div className="flex flex-row w-full pb-4">
          <label htmlFor="Professions" className="w-1/5">Profesión</label>

          <div className='flex flex-col'>
          {professions.data.map(profession => (
            <div key={profession.id} className="flex items-center">
              <input type="checkbox" id={`profession_${profession.id}`} name="Professions" value={profession.id} className="mr-2 cursor-pointer" />
              <label htmlFor={`profession_${profession.id}`} className='cursor-pointer'>{profession.name}</label>
            </div>
          ))}
          </div>
        </div>
        <input type="submit" className="flex justify-center w-1/4 h-8 bg-blue-700 rounded text-white cursor-pointer transition-all duration-500 hover:bg-blue-900" />
      </form>
    </div>
  )
}

export default Inscribe