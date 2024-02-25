import axios from 'axios'
const baseUrl = 'http://localhost:3213/api/professions'

const getAll = async () => {
    const request = axios.get(`${baseUrl}`)
    const response = await request
    return response.data
}

export default { getAll }