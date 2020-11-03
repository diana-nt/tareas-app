<template>
    <div id="home">
        <h2>{{ $t('homePage').toUpperCase() }}</h2>
        <agregar-tarea />
        <div class="taskList">
            <custom-select
                :options="options"
                :default="options[0]"
                @input="cambiarTab"/>
            <tareas
                @deleteTask = 'deleteTask'
                @completeTask = 'completeTask'
            />
        </div>
        <button class="ordenar" @click="ordenarTareas">{{ $t('sortButton') }}</button>
    </div>
</template>

<script>
import Tareas from "../components/Tareas";
import AgregarTarea from "../components/AgregarTarea";
import CustomSelect from "../components/CustomSelect";
import {TaskService} from "../services/tasks";


export default {
    name: 'Home.vue',
    data(){
      return {
          options: [ this.$t('option1') , this.$t('option2'), this.$t('option3')],
        }
    },
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
            let finalTasks = this.$store.getters.getTareas;
            TaskService.saveTasksInStorage(finalTasks);
        },
        completeTask(id) {
            this.$store.dispatch("completarTarea", id);
            this.$store.dispatch('actualizarFecha');
            let finalTasks = this.$store.getters.getTareas;
            TaskService.saveTasksInStorage(finalTasks);
        },
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
h2 {

    font-family: 'Oswald', sans-serif;
    align-self: center;
    font-size: 3.8rem;
    text-decoration: underline;
    text-decoration-color: paleturquoise;
    margin-bottom: 1em;
}

.ordenar {
    border-radius: 0;
    width: fit-content;
    background-color: #afeeee;
    cursor: pointer;
    font-weight: bold;
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

@media (max-width: 3000px) and (min-width: 450px){
    .taskList{
        padding: 10px 50px;
    }
}

button:hover{
    background-color: darkgray;
}
</style>

