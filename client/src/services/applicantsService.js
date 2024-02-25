import axios from 'axios'
const baseUrl = 'http://localhost:3213/api/applicants'

const getAll = async () => {
    const request = axios.get(`${baseUrl}`)
    const response = await request
    return response.data
}

const find = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    const response = await request
    console.log(response)
    return response
}

export default { getAll, find }