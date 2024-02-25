import { useParams } from 'react-router-dom';



const Profile = () => {
    let { id } = useParams();

    return(
        <div className="bg-gray-100 h-full w-full px-7 pt-6">
            <h1 className="text-gray-600 text-2xl">Búsqueda y selección</h1>
            <p className="text-gray-500">Hola mama {id}</p>
        </div>
    )
}

export default Profile