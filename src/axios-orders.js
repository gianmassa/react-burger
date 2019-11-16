import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-7dab4.firebaseio.com/'
})

export default instance
