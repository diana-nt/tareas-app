import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: localStorage.getItem('lang'),
    fallbackLocale: 'es',
    messages: {
        es: {
            //Home page
            homePage: 'tareas que hacer',

            //Yesterday's completed tasks page
            yesterdayTasks: 'completadas ayer',

            //Add task input
            addTaskPlaceholder: '¿Qué tienes que hacer?',
            addTaskMessage: 'Escribe algo...',

            //Nav bar
            homeNav: 'Inicio',
            yesterdayTasksNav: 'Completadas ayer',
            logoutNav: 'Cerrar sesión',

            //Select
            option1: 'Tareas',
            option2: 'Pendientes',
            option3: 'Finalizadas',

            //Sort button
            sortButton: 'Ordenar a-z',

            //Footer
            footerName: 'Hecho por: Diana',
            footerYear: 'Año: 2020',

            //Login page
            loginTitle: 'Inicia sesión',
            usernamePlaceholder: 'Nombre de usuario',
            passwordPlaceholder: 'Contraseña',
            loginButton: '¡Vamos!',

            //Tasks completed x days ago
            completed: 'Completada hoy | Completada hace un día | Completada hace {numdays} días'
        },
        en: {
            //Home page
            homePage: 'tasks to do',

            //Yesterday's completed tasks page
            yesterdayTasks: 'completed yesterday',

            //Add task input
            addTaskPlaceholder: 'What do you have to do?',
            addTaskMessage: 'Write something...',

            //Nav bar
            homeNav: 'Home',
            yesterdayTasksNav: 'Completed yesterday',
            logoutNav: 'Log out',

            //Select
            option1: 'Tasks',
            option2: 'Pending',
            option3: 'Finished',

            //Sort button
            sortButton: 'Sort a-z',

            //Footer
            footerName: 'Made by: Diana',
            footerYear: 'Year: 2020',

            //Login page
            loginTitle: 'Log in',
            usernamePlaceholder: 'Username',
            passwordPlaceholder: 'Password',
            loginButton: "Let's go!",

            //Completed x days ago
            completed: 'Completed today | Completed a day ago | Completed {numdays} days ago'
        }
    }
})
