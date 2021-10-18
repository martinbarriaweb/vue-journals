import axios from "axios"

const journalApi = axios.create({
    baseURL: 'https://vue-demo-mb-default-rtdb.firebaseio.com/'
})

export default journalApi