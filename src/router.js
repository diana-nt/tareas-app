import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import YstdTasks from './views/YstdTasks.vue';
// import Post from './components/Post.vue';
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/ystdtasks',
            name: 'ystdtasks',
            component: YstdTasks
        },
        /*{
            path: '/posts/:id',
            name: 'post',
            component: Post,
            meta: {
                auth: true,
            }
        },*/
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router;
