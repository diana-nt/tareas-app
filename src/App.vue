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
    components: {Navegacion, },
    created() {
            var envJSON = require('../env.variables.json');
            if (envJSON['development']){
                console.log('Estás en desarrollo')
            } else if (envJSON['production']){
                console.log('Estás en producción')
            }else {
                console.log('Has hecho algo mal con la variable de entorno')
            }
    }
}
</script>

<style scoped>

</style>