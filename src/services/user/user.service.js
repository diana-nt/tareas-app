const mockAccount = {
    username: "diana",
    password: "1234"
}
export class UserService {

    static login(data){
        return data.username === mockAccount.username && data.password === mockAccount.password;
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
