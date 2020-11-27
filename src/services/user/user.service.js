/*const mockAccount = {
    username: "diana",
    password: "1234"
}*/
import repo from '../../../api/users.repository';

export class UserService {

    static async login(input){
        const response = await repo.getUser();
        console.log(response.data.username)
        let logear = false;
        if(input.username === response.data.username && input.password === response.data.password){
            logear = true;
        }
        return logear;
        // return input.username === response.data.username && input.password === response.data.password;
        // return data.username === mockAccount.username && data.password === mockAccount.password;
    }
    static saveSessionInStorage(){
       return localStorage.setItem('todolist_userLogged',true);
    }
    static getSessionStorage(){
        return localStorage.getItem('todolist_userLogged');
    }
    static deleteSessionInStorage(){
        return localStorage.removeItem('todolist_userLogged');
    }

}
