import React, { useState, useEffect } from 'react'

import applicantsService from '../services/applicantsService'
import ApplicantCard from "../components/ApplicantCard"

const Applicants = () => {
    const [ applicants, setApplicants ] = useState({data: []})

    useEffect(() => {
        applicantsService
        .getAll()
        .then(applicants => setApplicants(applicants))
        .catch(error => console.error(error))
    }, [])

    return (
        <div className="bg-gray-100 h-full w-full px-7 pt-6">
            <h1 className="text-gray-600 text-2xl">Aspirantes</h1>
            <div className="flex flex-wrap justify-around  px-0 mt-4 w-full">
                {applicants.data.map(applicant => {
                    return <ApplicantCard applicant={applicant} key={applicant.id}></ApplicantCard>
                })}
            </div>
        </div>
    )
}
export default Applicants