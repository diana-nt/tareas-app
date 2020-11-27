import httpClient from "./httpClient";

const path = 'users';

export default {
    async getUser(){
        return await httpClient.get(path);
    },
    async setUser(uname, pwd){
        return await httpClient.post(path, {
            username: uname,
            password: pwd,
        } )
    }
}