import axios from 'axios'

const http = axios.create({
    baseURL: 'https://blog-api.hypetech.xyz/v1/',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'B1tD3V'

    }
});

export default http