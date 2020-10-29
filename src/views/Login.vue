<template>
    <div id="login">
        <h2>Inicia sesión</h2>
        <div id="inputs">
            <input type="text" name="username" v-model="input.username" placeholder="Username" v-focus/>
            <input type="password" name="password" v-model="input.password" placeholder="Password" @keyup.enter="login" />
        </div>
        <button type="button" @click="login()">Login</button>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import {UserService} from "../services/user";

export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        /*login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "Home" });
                } else {
                    console.log("Nombre de usuario y/o contraseña incorrecto/s");
                }
            } else {
                console.log("Debes introducir un nombre de usuario y una contraseña");
            }
        }*/
        login() {
            if(this.input.username.length && this.input.password.length) {

                let resultLogin = UserService.login(this.input)
                if (!resultLogin){
                    console.log("Nombre de usuario y/o contraseña incorrecto/s");

                }else{
                    UserService.saveSessionInStorage();
                    let resultSaveInStorage = UserService.getSessionStorage();
                    if (resultSaveInStorage){
                        this.$store.dispatch('login');
                        this.$router.replace({ name: "Home" });
                    }
                }


                // if(this.input.username == this.account.username && this.input.password == this.account.password) {
                //     this.$store.dispatch('login');
                //     this.$router.replace({ name: "Home" });
                // } else {
                //     console.log("Nombre de usuario y/o contraseña incorrecto/s");
                // }
            } else {
                console.log("Debes introducir un nombre de usuario y una contraseña");
            }
        }
    },
    computed: {
        ...mapGetters({authenticated:"getAuthenticated"}),
        // ...mapGetters({account:"getMockAccount"})
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    }
}
</script>

<style scoped>
#login {
    width: 30em;
    max-width: 100%;
    border: 2px solid black;
    background-color: #e8fcff;
    margin: auto;
    /*margin-top: 200px;*/
    margin-bottom: 12em;
    margin-top: 12em;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

#inputs {
    align-self: center;
    display: flex;
    flex-direction: column;
    width: fit-content;
    max-width: 100%;
}

input {
    background: white;
    border: solid 2px;
    /*padding: 7px 10px;*/
    padding: .3em .4em;
    width: 16em;
    max-width: 100%;
    color: black;
    border-color: black;
    font-size: 1.4rem;
    margin-bottom: .6em;
    align-self: center;
}

button {
    border: solid 2px;
    background: paleturquoise;
    cursor: pointer;
    width: 75px;
    /*margin-top: 20px;*/
    align-self: center;
    color: black;
    font-size: 1.4rem;
    text-align: center;
}

</style>