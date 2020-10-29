<template>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                <div id="individualTask">
                    <label class="container">
                        <input type="checkbox" v-model="tarea.completed" @input="$emit('completeTask', tarea.id)">
                        <span :class="{ 'completed': tarea.completed }">{{ tarea.title }}</span>
                        <span class="checkmark"></span>
                    </label>
                    <div class="daysFromCompleted" v-if="tarea.completed">Completed {{tarea.getDaysFromCompleted()}}</div>
                    <button @click="$emit('deleteTask', tarea.id)"><font-awesome-icon icon="times"/></button>
                </div>
                <hr>
            </li>
        </ul>

</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {mapGetters} from "vuex";
import {TaskService} from "../services/tasks";


library.add(faTimes);

export default {
name: "Tareas.vue",
    components: {
        FontAwesomeIcon,
    },

    computed: {
        ...mapGetters({tareas:"getTareasAMostrar"})
    },

    created() {
        let tasksStorage = TaskService.getTasksFromStorage();
        this.$store.dispatch('setTasks',tasksStorage)
        this.$store.dispatch('agregarCompletadas');
    },

    methods: {
    },

}
</script>

<style scoped>

#individualTask {
    display: grid;
    /*grid-template-columns: repeat(3, 1fr);*/
    grid-template-columns: 70% 20% 7%;
    grid-gap: 10px;
    /*grid-auto-rows: minmax(10px, auto);*/
}

.daysFromCompleted{
    grid-column: 2;
    overflow-wrap: break-word;
}

/*div {
    display: flex;
    width: fit-content;
    !*transform: translateX(5em);*!
}*/

ul{
    /*margin-left: 40px;*/
    /*margin-left: 3rem;*/
    /*width: 400px;*/
    /*width: 50rem;*/
    /*max-width: 95vw;*/
    /*margin-right: 1rem;*/
    margin: 0;
    /*padding: 0;*/
    /*padding: 1em 1em 1em 2em;*/
    padding-left: 2em;
    /*padding-right: 1em;*/
    min-width: 100%;
}

li {
    list-style: none;
    /*display: flex;
    flex-direction: column;*/
    /*justify-content: space-between;*/
    /*margin-bottom: 20px;*/
    margin-bottom: 1rem;
    /*border-bottom: solid 1px #000;*/
}

.completed {
    background: linear-gradient(to right, rgba(175, 238, 238, 0.5), rgb(175, 238, 238), rgba(175, 238, 238, 0.5));
    content: "";
    height: 0.125em;
    left: 0;
    margin-top: calc(0.125em / 2 * -1);
    right: 0;
    top: 50%;
}

button{
    /*margin-left: 20px;*/
    border-radius: 0;
    height: 20px;
    width: 20px;
    background-color: #afeeee;
    cursor: pointer;
    float: right;
    padding: 0;
    grid-column: 3;
    justify-self: right;
    justify-content: center;
}

/*.iconPosition {
    position: relative;
    right: 2.5px;
}*/


.container {
    grid-column: 1;
    display: inline-block;
    position: relative;
    padding-left: 2em;
    /*margin-bottom: 12px;*/
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /*max-width: 45rem;
    overflow: auto;*/
    max-width: 90%;
    overflow-wrap: break-word;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid black;
}

.container:hover input ~ .checkmark {
    background-color: paleturquoise;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 5px;
    top: 0;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>