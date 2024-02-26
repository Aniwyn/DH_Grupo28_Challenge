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
    return response.data
}

const deleteItem = async (id) => {
    const request = axios.delete(`${baseUrl}/delete/${id}`)
    const response = await request
    return response.data
}

export default { getAll, find, deleteItem }