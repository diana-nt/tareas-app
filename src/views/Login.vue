<template>
    <div class="login">
        <h2>{{ $t('loginTitle') }}</h2>
        <div class="inputs">
            <input type="text" name="username" v-model="input.username" :placeholder="$t('usernamePlaceholder')" v-focus/>
            <input type="password" name="password" v-model="input.password" :placeholder="$t('passwordPlaceholder')" @keyup.enter="login" />
        </div>
        <button type="button" @click="login()">{{ $t('loginButton') }}</button>
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
            } else {
                console.log("Debes introducir un nombre de usuario y una contraseña");
            }
        }
    },
    computed: {
        ...mapGetters({authenticated:"getAuthenticated"}),
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
.login {
    width: 30em;
    max-width: 100%;
    border: 2px solid black;
    background-color: #e8fcff;
    margin: auto;
    margin-bottom: 12em;
    margin-top: 12em;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.inputs {
    align-self: center;
    display: flex;
    flex-direction: column;
    width: fit-content;
    max-width: 100%;
}

input {
    background: white;
    border: solid 2px;
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
    width: 110px;
    margin-top: 20px;
    align-self: center;
    color: black;
    font-size: 1.4rem;
    text-align: center;
    padding: 5px;
}

button:hover{
    background-color: darkgray;
}

</style>