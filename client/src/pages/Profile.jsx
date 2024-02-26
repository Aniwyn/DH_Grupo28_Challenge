import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

import applicantsService from '../services/applicantsService'

const Profile = () => {
    let { id } = useParams();
    const [applicant, setApplicant] = useState({ data: [] })
    const navigate = useNavigate()

    useEffect(() => {
        applicantsService
            .find(id)
            .then(applicant => setApplicant(applicant.data))
            .catch(error => console.error(error))
    }, [])

    const deletionNotice = (event) => {
        event.preventDefault()


        let response = confirm('¿Esta seguro que desea eliminarlo?')
        if (response) {
            navigate(`/applicants/delete/${id}`)
        }
    }

    return (
        <div className="flex flex-col bg-gray-100 h-full w-full px-7 pt-6">
            <Link className='flex flex-row w-[40px] hover:ml-2 transition-all duration-500' to="/applicants">
                <img src="/icons/back.png" className='pr-3' style={{ height: 28 + 'px' }} alt="" />
            </Link>
            <div className="flex flex-col relative self-center  bg-white shadow-lg rounded-lg lg:m-2 md:m-0 lg:w-[45%] md:w-[50%] w-[100%]">
                <div className='absolute top-5 right-0 flex justify-end'>
                    <Link to={`/applicants/update/${applicant.id}`}><img src="/icons/edit.png" className='pr-3' style={{ height: 28 + 'px' }} alt="" /></Link>
                    <form onSubmit={deletionNotice}>
                        <button type="submit"><img src="/icons/delete.png" className='pr-3' style={{ height: 28 + 'px' }} alt="" /></button>
                    </form>
                </div>
                <div className="text-center border-b py-5 flex-grow">
                    <img src={`http://localhost:3213/img/${applicant.image}`} className="h-[100px] mb-4 rounded-full mx-auto" alt="" />
                    <h2 className="font-bold text-gray-600">{applicant.name} {applicant.last_name}</h2>
                </div>
                <div className="flex flex-col justify-between py-5 px-5 text-gray-600">
                    <p><strong>Email: </strong>{applicant.email}</p>
                    <p><strong>Telefono: </strong>{applicant.phone}</p>
                    <p><strong>LinkedIn: </strong><a href={applicant.url_linkedin} className='text-blue-400 hover:text-blue-500'>{applicant.url_linkedin}</a></p>
                    <p><strong>Genero: </strong>{applicant.genders?.name}</p>
                    <p><strong>Fecha de nacimiento: </strong>{applicant.birth_date}</p>
                    <p><strong>Competencias: </strong></p>
                    <ul>
                        {applicant.professions && Array.isArray(applicant.professions) && applicant.professions.map(profession => (
                            <li key={profession.id}>{profession.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile