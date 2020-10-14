<template>

    <h2>Tareas completadas ayer</h2>

</template>

<script>
export default {
    name: "TareasCompletadasAyer",
    methods: {
        verPost() {
            this.$router.push({
                name: 'ystdtasks',
            })
        }
    },

}
</script>

<style scoped>

</style>