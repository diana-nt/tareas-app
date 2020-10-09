<template>
    <div>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.title }}
                <button @click="eliminarTarea(tarea.id)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Tareas.vue",
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