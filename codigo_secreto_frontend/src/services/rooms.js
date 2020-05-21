import axios from 'axios'
let baseUrl = process.env.REACT_APP_BASEURL

const get = (roomId) => {
  return axios.get(`${baseUrl}/${roomId}`)
}

const create = () => {
  return axios.post(`${baseUrl}`)
}

const update = (id, newObject, roomId) => {
  const request = axios.put(`${baseUrl}/${roomId}/${id}`, newObject)
  return request.then((response) => response.data)
}

export default {
  get,
  create,
  update,
}
