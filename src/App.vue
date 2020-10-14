<template>

<!--    <home></home>-->
    <div id="app">
        <Navegacion />
        <RouterView />
    </div>

</template>

<script>
// import Home from "./views/Home";
import Navegacion from "./components/Navegacion";
export default {
    name: "App",
    components: {Navegacion, }
}
</script>

<style scoped>

</style>