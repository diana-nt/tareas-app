<template>

<!--    <home></home>-->
    <div id="app">
        <!--<navegacion />
        <router-view />-->
        <!--<div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>-->

        <navegacion v-if="authenticated" @logout = "logout"/>
        <router-view @authenticated="setAuthenticated" />
    </div>

</template>

<script>
// import Home from "./views/Home";
// import Navegacion from "./components/Navegacion";
// import Login from "./components/Login";

import Navegacion from "./components/Navegacion";
export default {
    name: "App",
    components: {
        Navegacion
        // Navegacion,
        // Login
    },
    /*data() {
        return {
            userIsLoggedIn: false
        }
    },
    computed: {
        isLoggedIn() {
            return this.userIsLoggedIn
        }
    },
    methods: {
        handleLoginResult({loginResult}) {
            this.userIsLoggedIn = loginResult
        }
    },*/
    data() {
        return {
            authenticated: false,
            mockAccount: {
                username: "diana",
                password: "password"
            }
        }
    },
    mounted() {
        if(!this.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },
    methods: {
        setAuthenticated(status) {
            this.authenticated = status;
        },
        logout() {
            this.authenticated = false;
        }
    },
    created() {
            const envJSON = require('../env.variables.json');
            if (envJSON['development']){
                console.log('Estás en desarrollo')
            } else if (envJSON['production']){
                console.log('Estás en producción')
            }else {
                console.log('Has hecho algo mal con la variable de entorno')
            }
    }
}
</script>

<style scoped>

</style>