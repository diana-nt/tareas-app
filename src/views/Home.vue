<template>
    <div id="home">
        <h2>{{ $t('homePage').toUpperCase() }}</h2>
        <agregar-tarea />
        <div class="taskList">
            <custom-select
                :options="[ $t('option1') , $t('option2'), $t('option3')]"
                :default="$t('option1')"
                @input="cambiarTab"/>
            <tareas
                @deleteTask = 'deleteTask'
                @completeTask = 'completeTask'
            />
        </div>
        <button class="ordenar" @click="ordenarTareas">{{ $t('sortButton') }}</button>
        <!--<footer>
            <p>Hecho por: Diana</p>
            <p>Año: 2020</p>
        </footer>-->
    </div>
</template>

<script>
import Tareas from "../components/Tareas";
import AgregarTarea from "../components/AgregarTarea";
import CustomSelect from "../components/CustomSelect";
import {TaskService} from "../services/tasks";


export default {
    name: 'Home.vue',
    components: {
        Tareas,
        AgregarTarea,
        CustomSelect
    },
    methods: {
        cambiarTab(tab){
            this.$store.dispatch('cambiarTab', tab);
        },
        ordenarTareas(){
            this.$store.dispatch('ordenarTareas')
        },
        deleteTask(id) {
            this.$store.dispatch("eliminarTarea", id);
            this.$store.dispatch('actualizarFecha');
            // this.$store.dispatch("cambiarId");
            let finalTasks = this.$store.getters.getTareas;
            // console.log(finalTasks)
            TaskService.saveTasksInStorage(finalTasks);
        },
        completeTask(id) {
            this.$store.dispatch("completarTarea", id);
            this.$store.dispatch('actualizarFecha');
            let finalTasks = this.$store.getters.getTareas;
            // console.log(finalTasks)
            TaskService.saveTasksInStorage(finalTasks);
            // console.log(TaskService.getCompletedTasks())
        },
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
h2 {

    font-family: 'Oswald', sans-serif;
    align-self: center;
    /*font-size: 60px;*/
    font-size: 3.8rem;
    text-decoration: underline;
    text-decoration-color: paleturquoise;
    margin-bottom: 1em;
}

.ordenar {
    border-radius: 0;
    /*height: 25px;*/
    /*width: 70px;*/
    width: fit-content;
    background-color: #afeeee;
    cursor: pointer;
    font-weight: bold;
    /*margin-top: 30px;*/
    padding: .4em 1em;
}

#home {
    display: flex;
    flex-direction: column;
    //padding-top: 2em;
    padding: 2em;
}
.taskList{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1em 0em;
}

/*footer {
    position: sticky;
    bottom: 0;
    margin-top: 3em;
    text-align: center;
    padding: 0.5em;
    background-color: #333333;
    color: #ffffff;
}*/

button:hover{
    background-color: darkgray;
}
</style>

