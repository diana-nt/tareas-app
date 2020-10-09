<template>
    <div>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.title }}
                <button @click="eliminarTarea(tarea.id)"><font-awesome-icon icon="times"/></button>
            </li>
        </ul>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faTimes);

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

</style>