<template>
    <div>
        <h2>{{ $t('yesterdayTasks').toUpperCase() }}</h2>
        <ul>
<!--            <li v-for="completada in completadas" :key="completada.id">{{ completada.title }}</li>-->
            <li v-for="completada in completadasAyer" :key="completada.id">{{ completada.title }}
            <hr>
            </li>
        </ul>
    </div>
</template>

<script>
// import {mapGetters} from 'vuex';
import {TaskService} from "../services/tasks";
// import {TaskService} from "./tasks.service";

export default {
    name: "TareasCompletadasAyer",
    methods: {
    },
    computed: {
        // ...mapGetters({completadas:"getCompletadasAyer"}),
        completadasAyer() {
            return TaskService.getTasksCompletedYesterday()
        }
    }

}
</script>

<style scoped>

ul {
    text-align: center;
    font-size: 18px;
    padding: 0;
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
    padding-top: 2em;
}

</style>