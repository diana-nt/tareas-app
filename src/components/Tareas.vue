<template>
    <div>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                <label class="container">
                    <input type="checkbox" v-model="tarea.completed" @input="completarTarea(tarea.id)">
                    <span :tareas="mostrarTareas" :class="{ 'completed': tarea.completed }">{{ tarea.title }}</span>
                    <span class="checkmark"></span>
                </label>
                <button @click="eliminarTarea(tarea.id)"><font-awesome-icon icon="times" class="iconPosition"/></button>
            </li>
        </ul>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {mapGetters} from "vuex";

library.add(faTimes);

export default {
name: "Tareas.vue",
    components: {
        FontAwesomeIcon
    },

    computed: {
        // ...mapGetters({tareas:"getTareas"}),
        ...mapGetters({tareas:"getTareasAMostrar"}),

    },
    methods: {
        completarTarea(id) {
            this.$store.dispatch("completarTarea", id);
            this.$store.dispatch('actualizarFecha');
        },
        eliminarTarea(id) {
            this.$store.dispatch("eliminarTarea", id);
            this.$store.dispatch('actualizarFecha');
        },
        mostrarTareas(){
            if (this.$store.getters.getTab === 'finalizadas'){
                return this.$store.getters.getTareasFinalizadas;
            }else if (this.$store.getters.getTab === 'pendientes'){
                return this.$store.getters.getTareasPendientes;
            }
            return this.$store.getters.getTareas;
        }
    },

}
</script>

<style scoped>

li {
    list-style: none;
    margin-bottom: 20px;
}

ul{
    margin-left: 40px;
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
    margin-left: 20px;
    border-radius: 0;
    height: 20px;
    width: 20px;
    background-color: #afeeee;
    cursor: pointer;
}

.iconPosition {
    position: relative;
    right: 2.5px;
}


.container {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
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