import axios from "axios";


const instance = axios.create({
    baseURL : 'http://62.113.96.238:4444'
})

export default instance