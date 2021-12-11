import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default{
    getStudents(){
        return apiClient.get('/students')
    }

}