import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

import applicantsService from '../services/applicantsService'
import professionsService from '../services/professionsService'

function Inscribe() {

  const { id } = useParams();
  const [professions, setProfessions] = useState({ data: [] });
  const [applicant, setApplicant] = useState({
    dni: '',
    last_name: '',
    name: '',
    phone: '',
    gender_id: '',
    birth_date: '',
    email: '',
    url_linkedin: '',
    professions: [],
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    professionsService
      .getAll()
      .then((professions) => setProfessions(professions))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    applicantsService
      .find(id)
      .then((applicant) => setApplicant(applicant.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicant({ ...applicant, [name]: value });
  };

  const handleProfessionChange = (event) => {
    const professionId = parseInt(event.target.value);
    const isChecked = event.target.checked;
  
    setApplicant((prevApplicant) => {
      // Realizar una copia profunda del objeto prevApplicant
      const updatedApplicant = { ...prevApplicant };
  
      if (isChecked) {
        // Agregar professionId al array professions
        updatedApplicant.professions = [...updatedApplicant.professions, professionId];
      } else {
        // Filtrar professionId del array professions
        updatedApplicant.professions = updatedApplicant.professions.filter((id) => id !== professionId);
      }
      console.log(updatedApplicant.professions.filter(item => Number.isInteger(item)))
      return updatedApplicant;
    });
  };
  
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // const json = {
    //   dni: applicant.dni,
    //   last_name: applicant.last_name,
    //   name: applicant.name,
    //   phone: applicant.phone,
    //   gender_id: applicant.gender_id,
    //   birth_date: '',
    //   email: applicant.email,
    //   url_linkedin: '',
    //   professions: applicant.professions,
    // }
    const formData = new FormData();
    formData.append('dni', applicant.dni);
    formData.append('last_name', applicant.last_name);
    formData.append('name',applicant.name);
    formData.append('phone', applicant.phone);
    formData.append('gender_id', applicant.gender_id);
    formData.append('birth_date', applicant.birth_date);
    formData.append('email', applicant.email);
    formData.append('url_linkedin', applicant.url_linkedin);
    formData.append('professions', applicant.professions.filter(item => Number.isInteger(item)));
    formData.append('image', selectedImage); // Aquí agregamos la imagen al FormData
  
    try {
      const response = await axios.post(`http://localhost:3213/api/applicants/update/${id}`, formData, {
        headers: {
          Accept:'application/json',
          'Content-Type': 'multipart/form-data', // Es importante establecer el encabezado adecuado para enviar archivos
        },
      });
  
      if (response.status === 200) {
        console.log('Datos actualizados correctamente');
      } else {
        console.error('Error al actualizar los datos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
    }
    navigate("/applicants");
  };
  
  return (
    <div className="px-8 pt-5">
      <h1 className="font-bold text-blue-900 text-lg">Actualizando los datos de <span className='italic text-rose-600'>{applicant.last_name}, {applicant.name}</span>.</h1>
      {/* <div className="w-100 h-[1px] bg-gray-300 my-4"></div> */}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col justify-s w-full space-y-2 font- text-sm text-slate-600">

        <h2 className="mt-2 font-medium text-slate-600 text-md">Datos personales</h2>
        <div className="w-100 h-[0.5px] bg-gray-300 my-2 "></div>
        <div className="flex flex-row w-full">
          <label htmlFor="dni" className="w-1/5">D.N.I.</label>
          <input id="dni" type="text" name="dni" value={`${applicant.dni}`} onChange={handleChange} placeholder="Ingresa un DNI..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="last_name" className="w-1/5">Apellido</label>
          <input id="last_name" type="text" name="last_name" value={`${applicant.last_name}`} onChange={handleChange} placeholder="Ingresa tu apellido..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="name" className="w-1/5">Nombre/s</label>
          <input id="name" type="text" name="name" value={`${applicant.name}`} onChange={handleChange} placeholder="Ingresa tu nombre..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="phone" className="w-1/5">Teléfono</label>
          <input id="phone" type="text" name="phone" value={`${applicant.phone}`} onChange={handleChange} placeholder="Ingresa tu número de teléfono..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="gender_id" className="w-1/5">Género</label>
          <select id="gender_id" name="gender_id" value={`${applicant.gender_id}`} onChange={handleChange} className="w-1/2 border px-1 rounded-sm px-2 py-1 placeholder:ml-5 hover:border-gray-400" >
            <option value="1">Masculinno</option>
            <option value="2">Femenino</option>
            <option value="3">Otro</option>
          </select><br></br>
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="birth_date" className="w-1/5">Fecha de nacimiento</label>
          <input id="birth_date" name="birth_date" value={`${applicant.birth_date}`} onChange={handleChange} type="date" className="w-1/2 border px-1 rounded-sm px-2 py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="email" className="w-1/5">Correo electrónico</label>
          <input id="email" name="email" type="text" value={`${applicant.email}`} onChange={handleChange} placeholder="Ingresa tu email..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <h2 className="pt-4 font-medium text-slate-600 text-md">Datos profesionales</h2>
        <div className="w-100 h-[0.5px] bg-gray-300 my-2 "></div>
        <div className="flex flex-row w-full">
          <label htmlFor="url_linkedin" className="w-1/5">Perfil de LinkedIn</label>
          <input id="url_linkedin" name="url_linkedin" value={`${applicant.url_linkedin}`} onChange={handleChange} type="text" placeholder="Ingresa tu perfil de LinkedIn..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="image" className="w-1/5">Imagen</label>
          <input id="image" name="image" onChange={handleFileSelect} type="file" accept=".jpg, .jpeg, .png, .gif" placeholder="Ingresa tu fotografía..." className="w-1/2 pl-2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400 
          file:mr-4 file:py-1 file:px-2
          file:border-0
          file:text-xs file:font-md
          file:bg-violet-50 file:text-slate-700
          hover:file:bg-blue-100 file:cursor-pointer cursor-pointer
          text-xs" />
        </div>
        <div className="flex flex-row w-full pb-4">
          <label htmlFor="professions" className="w-1/5">
            Profesión
          </label>
          <div className="flex flex-col">
            {professions.data.map((profession) => (
              <div key={profession.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`profession_${profession.id}`}
                  name="Professions"
                  value={profession.id}
                  checked={applicant.professions.includes(profession.id)}
                  onChange={handleProfessionChange}
                />
                <label
                  htmlFor={`profession_${profession.id}`}
                  className="cursor-pointer"
                >
                  {profession.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className='flex space-x-4'>
          <input type="submit" className="flex justify-center w-1/4 h-8 bg-blue-700 rounded text-white cursor-pointer transition-all duration-500 hover:bg-blue-900" value="Guardar" />
          <Link className='flex items-center justify-center w-1/4 h-8 bg-rose-700 rounded text-white cursor-pointer transition-all duration-500 hover:bg-rose-800' to={`/applicants/${id}`}>
            Cancelar
          </Link>
        </div>

      </form>
    </div>
  )
}

export default Inscribe