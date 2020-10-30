import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: localStorage.getItem('lang'),
    // fallbackLocale: 'es',
    messages: {
        es: {
            //Home page
            homePage: 'tareas que hacer',

            //Yesterda's completed tasks page
            yesterdayTasks: 'completadas ayer',

            //Add task input
            addTaskPlaceholder: '¿Qué tienes que hacer?',

            //Nav bar
            homeNav: 'Inicio',
            yesterdayTasksNav: 'Completadas ayer',
            logoutNav: 'Cerrar sesión',

            //Select
            option1: 'Tareas',
            option2: 'Pendientes',
            option3: 'Finalizadas',

            //Sort button
            sortButton: 'Ordenar',

            //Footer
            footerName: 'Hecho por: Diana',
            footerYear: 'Año: 2020',

            //Login page
            loginTitle: 'Inicia sesión',
            usernamePlaceholder: 'Nombre de usuario',
            passwordPlaceholder: 'Contraseña',
            loginButton: '¡Vamos allá!',

            //Tasks completed x days ago
            completed: 'Completada'
        },
        en: {
            //Home page
            homePage: 'tasks to do',

            //Yesterda's completed tasks page
            yesterdayTasks: 'completed yesterday',

            //Add task input
            addTaskPlaceholder: 'What do you have to do?',

            //Nav bar
            homeNav: 'Home',
            yesterdayTasksNav: 'Completed yesterday',
            logoutNav: 'Log out',

            //Select
            option1: 'Tasks',
            option2: 'Pending',
            option3: 'Finished',

            //Sort button
            sortButton: 'Sort',

            //Footer
            footerName: 'Made by: Diana',
            footerYear: 'Year: 2020',

            //Login page
            loginTitle: 'Log in',
            usernamePlaceholder: 'Username',
            passwordPlaceholder: 'Password',
            loginButton: "Let's go!",

            //Completed x days ago
            completed: 'Completed'
        }
    }
})
