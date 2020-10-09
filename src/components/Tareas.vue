<template>
    <div class="inputDiv">
        <input type="text" v-model="title" name="title" placeholder="¿Qué tienes que hacer?" @keyup.enter="addTarea" v-focus>
        <button class="agregar" ><font-awesome-icon icon="plus" /></button>
        <div>
            <ul>
                <li v-for="tarea in tareas" :key="tarea.id">
                    {{ tarea.title }}
                    <button class="eliminar" @click="eliminarTarea(tarea.id)"><font-awesome-icon icon="times" class="iconPosition"/></button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faTimes, faPlus);

export default {
name: "Tareas.vue",
    components: {
        FontAwesomeIcon
    },
    computed: {
        tareas() {
            return this.$store.getters.getTodos;
        }
    },
    methods: {
        completarTarea(id) {
            this.$store.dispatch("completarTarea", id);
        },
        eliminarTarea(id) {
            this.$store.dispatch("eliminarTarea", id);
        }
    }
}
</script>

<style scoped>

.inputDiv {
    /*display: flex;*/
    /*text-align: center;*/
    margin-left: 32%;
    padding-bottom: 20px;
}

input {
    background: transparent;
    border: solid 1px;
    padding: 7px 10px;
    border-right: none;
    width: 40%;
    color: black;
    border-color: black;
    font-size: 22px;
}

.agregar {
    border: solid 1px;
    padding: 7px 10px;
    background: paleturquoise;
    cursor: pointer;
    width: 10%;
    color: black;
    font-size: 22px;
    text-align: center;
    vertical-align: center;
}

.eliminar {
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

</style>