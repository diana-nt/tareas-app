<template>
    <div>
<!--        <navegacion />-->

        <h2>COMPLETADAS AYER</h2>

        <ul>
            <li v-for="completada in completadas" :key="completada.id">{{ completada.title }}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
// import Navegacion from "../components/Navegacion";

export default {
    name: "TareasCompletadasAyer",
    // components: {Navegacion},
    methods: {
    },
    computed: {
        ...mapGetters({completadas:"getCompletadasAyer"})
    }

}
</script>

<style scoped>

ul {
    text-align: center;
    font-size: 18px;
}

li{
    list-style: none;
    margin-bottom: 20px;
}

</style>