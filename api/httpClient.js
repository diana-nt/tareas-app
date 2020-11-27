import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://run.mocky.io/v3',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});

export default httpClient;