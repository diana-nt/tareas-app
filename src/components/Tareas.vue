<template>
        <ul>
            <li v-for="tarea in tareasAMostrar" :key="tarea.id">
                <div class="individualTask">
                    <label class="container">
                        <input type="checkbox" v-model="tarea.completed" @input="$emit('completeTask', tarea.id)">
                        <span :class="{ 'completed': tarea.completed }">{{ tarea.title }}</span>
                        <span class="checkmark"></span>
                    </label>
                    <div class="daysFromCompleted" v-if="tarea.completed">
                        {{ $tc('completed',getDaysFromCompleted(tarea), {numdays: tarea.getDaysFromCompleted()})}}
                    </div>
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
        ...mapGetters({tareasAMostrar:"getTareasAMostrar"})
    },

    async created() {
        // TaskService.setTasksInStorage();
        let tasksRepository = await TaskService.getTasksFromRepository();
        // console.log(tasksRepository)
        this.$store.dispatch('setTasks', tasksRepository);
        this.$store.dispatch('agregarCompletadas');
    },

    methods: {
        getDaysFromCompleted(tarea){
            if (tarea.getDaysFromCompleted() === 0){
                return 0;
            } else if (tarea.getDaysFromCompleted() === 1){
                return 1;
            } else {
                return 2;
            }
        }
    },
/*    mounted() {
        this.$nextTick(() => {
            if(this.i18n.locale === 'es'){
                switch(this.selected){
                    case 'Tasks':
                        this.selected = this.$t('option1');
                        break;

                    case 'Pending':
                        this.selected = this.$t('option2');
                        break;

                    case 'Finished':
                        this.selected = this.$t('option3');
                        break;

                    default:
                        console.log('No ha hecho falta cambiar el selected');
                        break;
                }
            }else if(this.i18n.locale === 'en'){
                switch (this.selected){
                    case 'Tareas':
                        this.selected = this.$t('option1');
                        break;

                    case 'Pendientes':
                        this.selected = this.$t('option2');
                        break;

                    case 'Finalizadas':
                        this.selected = this.$t('option3');
                        break;

                    default:
                        console.log('No ha hecho falta cambiar el selected');
                        break;
                }
            }
        })
    }*/

}
</script>

<style scoped>



@media (max-width: 3000px) and (min-width: 450px){
    .individualTask {
        display: grid;
        grid-template-columns: auto minmax(160px, 200px) 20px;
        grid-gap: 10px;
    }

    .daysFromCompleted{
        grid-column: 2;
        overflow-wrap: break-word;
    }

    button{
        grid-column: 3;
    }

    .container{
        grid-column: 1;
        max-width: 90%;
        /*overflow-wrap: break-word;*/
        word-break: break-word;
    }

    ul{
        margin: 0;
        padding-left: 2em;
        min-width: 100%;
    }
}

@media (max-width: 450px) and (min-width: 60px){
    .individualTask{
        display: grid;
        grid-template-rows: auto;
        grid-gap: 10px;
        justify-content: space-between;
    }
    .daysFromCompleted{
        grid-row: 2;
        padding-left: 33px;
        overflow-wrap: break-word;
    }

    button{
        grid-row: 1;
    }

    .container{
        grid-row: 1;
        min-width: 200px;
        max-width: 300px;
        overflow-wrap: break-word;
    }

    ul{
        margin: 0;
        padding-left: 0;
        min-width: 100%;
    }
}

li {
    list-style: none;
    margin-bottom: 1rem;
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
    border-radius: 0;
    height: 20px;
    width: 20px;
    background-color: #afeeee;
    cursor: pointer;
    float: right;
    padding: 0;
    justify-content: center;
}

.container {
    display: inline-block;
    position: relative;
    padding-left: 2em;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>