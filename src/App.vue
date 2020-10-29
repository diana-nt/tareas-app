<template>
    <div id="app">
        <navegacion v-if="authenticated" @logout="logout"/>
<!--        <router-view @authenticated="setAuthenticated" />-->
        <router-view />
        <footer>
            <p>Hecho por: Diana</p>
            <p>Año: 2020</p>
        </footer>
    </div>
</template>

<script>
import Navegacion from "./components/Navegacion";
import {mapGetters} from "vuex";
import {UserService} from "./services/user";

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
    mounted() {
        if(!this.authenticated) {
            this.$router.push({ name: "login" });
        }else{
            this.$router.replace({name: 'Home'})
        }
    },
    methods: {
        /*setAuthenticated(status) {
            this.authenticated = status;
        },*/
        logout() {
            // this.authenticated = false;
            // this.$store.dispatch('logout');
            UserService.deleteSessionInStorage();
        }
    },
    computed: {
        ...mapGetters({authenticated:"getAuthenticated"}),
    },
    created() {
        if (UserService.getSessionStorage()){
            this.$store.dispatch('login');
        }
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

<style lang="scss">
/*------------------------------------*\
    $RESET
\*------------------------------------*/
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,figure,footer,header,main,menu,nav,section,time,mark,audio,video
{
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary
{
    display:block
}
*{
    &,
    &::before,
    &::after{
        box-sizing: border-box;
    }
}
img {
    max-width : 100%;
    border-width : 0;
    vertical-align : middle;
    -ms-interpolation-mode : bicubic;
}

footer {
    position: sticky;
    bottom: 0;
    //margin-top: 3em;
    text-align: center;
    padding: 0.5em;
    background-color: #333333;
    color: #ffffff;
    z-index: 1;
}

</style>