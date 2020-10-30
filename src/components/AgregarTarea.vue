<template>
    <div>
        <input
            type="text"
            v-model="title" name="title"
            :placeholder= "$t('addTaskPlaceholder')"
            @keyup.enter="agregarTarea"
            v-focus>
        <button @click="agregarTarea"><font-awesome-icon icon="plus" /></button>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import {TaskService} from "../services/tasks";
import { v4 as uuidv4 } from 'uuid';



library.add(faPlus)

export default {
name: "AgreagarTarea.vue",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            tareas: [],
            newId: null,
            title:'',
            completed: false,
            created_at: new Date(),
            completed_at: ''
        }
    },
    /*mounted() {
        if (localStorage.getItem('tareas')) {
            try {
                this.tareas = JSON.parse(localStorage.getItem('tareas'));
            }catch (e) {
                localStorage.removeItem('tareas');
            }
        }
    },*/
    methods:{
        agregarTarea(){
            // this.newId = this.tareas.length ? this.tareas.length++ : 1;
            /*if (localStorage.getItem('tareas')) {
                this.newId = JSON.parse(localStorage.getItem('tareas')).length++;
            } else {
                this.newId = 0;
            }*/
            // this.newId = this.tareas.length++;
            this.newId = uuidv4();
            this.$store.dispatch('agregarTarea', this);
            this.$store.dispatch('actualizarFecha');
            this.completed_at = '';
            // TaskService.saveTasksInStorage(this.tareas)
            // console.log(this.tareas)
            this.title = '';
        },

    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    }

}
</script>

<style scoped>

div {
    display: flex;
    width: 40em;
    /*display: inherit;*/
    align-self: center;
    /*padding-bottom: 20px;*/
    padding-bottom: 1em;
    max-width: 100vw;
    overflow-x: hidden;
}

input {
    background: transparent;
    border: solid 2px;
    padding: 7px 10px;
    /*padding: .3em .4em;*/
    border-right: none;
    width: inherit;
    max-width: 80%;
    /*width: 26em;
    max-width: inherit;*/
    color: black;
    border-color: black;
    /*font-size: 20px;*/
    font-size: 1.3rem;
}

input[type=text]:focus {
    outline: none;
    border: 2px solid paleturquoise;
}

button {
    justify-content: space-evenly;
    border: solid 2px;
    display: flex;
    /*padding: 7px 30px;*/
    padding: .32em 1.5em;
    background: paleturquoise;
    cursor: pointer;
    color: black;
    font-size: 22px;
    /*width: 5em;
    max-width: inherit;*/
    max-width: 20%;
    width: inherit;
}

button:hover{
    background-color: darkgray;
}

</style>