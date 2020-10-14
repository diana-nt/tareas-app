<template>
    <div>
        <Logo />
        <div id="nav">
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink :to="{name: 'ystdtasks'}">Tareas completadas ayer</RouterLink>
        </div>
    </div>
</template>

<script>
export default {
name: "Navegacion"
}
</script>

<style scoped>

</style>