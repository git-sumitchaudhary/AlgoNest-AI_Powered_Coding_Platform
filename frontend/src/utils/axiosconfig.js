


import axios from "axios"

const axios_Client = axios.create({
    baseURL: import.meta.env.VITE_URL || 'http://localhost:3000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axios_Client;