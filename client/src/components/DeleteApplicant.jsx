import { useState, useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom';

import applicantsService from '../services/applicantsService'

const DeleteApplicant = () => {
    const { id } = useParams();
    const [deleteState, setDeleteState] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        applicantsService.deleteItem(id)
        .then(() => setDeleteState(true))
        .catch(error => console.error(error));
    }, [id]);

    useEffect(() => {
        if (deleteState) {
            navigate('/applicants');
        }
    }, [deleteState, navigate]);

    return null; 
}

export default DeleteApplicant;