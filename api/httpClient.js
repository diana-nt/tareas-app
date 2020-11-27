import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://demo8460299.mockable.io/',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});

export default httpClient;