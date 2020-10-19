<template>
    <div>
        <h2>COMPLETADAS AYER</h2>
        <ul>
            <li v-for="completada in completadas" :key="completada.id">{{ completada.title }}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "TareasCompletadasAyer",
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
    padding: 0;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>