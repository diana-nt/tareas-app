<template>
    <div id="app">
        <navegacion v-if="authenticated" @logout="logout"/>
<!--        <locale-switcher />-->
<!--        <router-view @authenticated="setAuthenticated" />-->
        <router-view />
        <footer>
            <locale-switcher />
            <p>{{ $t('footerName') }}</p>
            <p>{{ $t('footerYear') }}</p>
        </footer>
    </div>
</template>

<script>
import Navegacion from "./components/Navegacion";
import {mapGetters} from "vuex";
import {UserService} from "./services/user";
import LocaleSwitcher from "./components/LocaleSwitcher";

export default {
    name: "App",
    components: {
        LocaleSwitcher,
        Navegacion
    },
    mounted() {
        if(!this.authenticated) {
            this.$router.push({ name: "login" });
        }else{
            this.$router.replace({name: 'Home'})
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
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
    //margin-top: 3em;
    //text-align: center;
    padding: 0.5em;
    background-color: #333333;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

@media (max-width: 1500px) and (min-width: 450px) {
    footer {
        position: sticky;
        bottom: 0;
        z-index: 1;
    }
}

@media (max-width: 450px) and (min-width: 60px) {
    footer {
        position: absolute;
        width: 100%;
    }
}

</style>