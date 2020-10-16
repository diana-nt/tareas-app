<template>
    <div id="app">
        <navegacion v-if="authenticated" @logout="logout"/>
<!--        <router-view @authenticated="setAuthenticated" />-->
        <router-view />
    </div>
</template>

<script>
import Navegacion from "./components/Navegacion";
import {mapGetters} from "vuex";

export default {
    name: "App",
    components: {
        Navegacion
    },
    /*data() {
        return {
            authenticated: false,
            mockAccount: {
                username: "diana",
                password: "1234"
            }
        }
    },*/
    /*mounted() {
        if(!this.authenticated) {
            this.$router.replace({ name: "login" });
        }
    },*/
    methods: {
        /*setAuthenticated(status) {
            this.authenticated = status;
        },*/
        logout() {
            // this.authenticated = false;
            this.$store.dispatch('logout');
        }
    },
    computed: {
        ...mapGetters({authenticated:"getAuthenticated"}),
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