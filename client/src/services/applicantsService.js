import axios from 'axios'
const baseUrl = 'http://localhost:3213/api/applicants'

const getAll = () => {
  const request = axios.get(`${baseUrl}`)
  return request.then(response => response.data)
}

export default { getAll }