<template>
    <div id="app">
        <h2>TAREAS QUE HACER</h2>

        <agregar-tarea />

        <custom-select
            :options="['Tareas', 'Pendientes', 'Finalizadas']"
            default="Tareas"
            @input="cambiarTab"/>

        <tareas />
        <button class="ordenar" @click="ordenarTareas">Ordenar</button>
    </div>
</template>

<script>
import Tareas from "../components/Tareas";
import AgregarTarea from "../components/AgregarTarea";
import CustomSelect from "../components/CustomSelect";

export default {
    name: 'Home.vue',
    components: {
        Tareas,
        AgregarTarea,
        CustomSelect
    },
    methods: {
        cambiarTab(tab){
            this.$store.dispatch('cambiarTab', tab);
        },
        ordenarTareas(){
            this.$store.dispatch('ordenarTareas')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');
h2 {

    font-family: 'Oswald', sans-serif;
    text-align: center;
    padding-top: 30px;
    font-size: 60px;
    text-decoration: underline;
    text-decoration-color: paleturquoise;
}

.ordenar {
    border-radius: 0;
    height: 25 px;
    width: 70px;
    background-color: #afeeee;
    cursor: pointer;
    font-weight: bold;
    margin-top: 30px;
}
</style>

