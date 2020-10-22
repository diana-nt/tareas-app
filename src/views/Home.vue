<template>
    <div id="home">
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
    align-self: center;
    /*font-size: 60px;*/
    font-size: 3.8rem;
    text-decoration: underline;
    text-decoration-color: paleturquoise;
}

.ordenar {
    border-radius: 0;
    /*height: 25px;*/
    /*width: 70px;*/
    width: fit-content;
    background-color: #afeeee;
    cursor: pointer;
    font-weight: bold;
    /*margin-top: 30px;*/
    padding: .4em 1em;
}

#home {
    display: flex;
    flex-direction: column;

}

</style>

