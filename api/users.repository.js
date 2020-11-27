import httpClient from "./httpClient";

const path = 'users';

export default {
    async getUser(){
        return await httpClient.get(path);
    }
}