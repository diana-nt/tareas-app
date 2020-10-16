import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import YstdTasks from './views/YstdTasks.vue';
// import Login from "./components/Login";
import Login from './views/Login'
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/ystdtasks',
            name: 'Ystdtasks',
            component: YstdTasks
        },
        /*{
            path: '/login',
            name: 'Login',
            component: Login
        },*/
      /*  {
            path: '*',
            redirect: '/home'
        }*/
    ]
});

export default router;
