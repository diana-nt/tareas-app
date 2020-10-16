<template>
    <div>
        <input
            type="text"
            v-model="title" name="title"
            placeholder="¿Qué tienes que hacer?"
            @keyup.enter="agregarTarea"
            v-focus>
        <button @click="agregarTarea"><font-awesome-icon icon="plus" /></button>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)

export default {
name: "AgreagarTarea.vue",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            newId: 6,
            title:'',
            completed: false,
            created_at: new Date(),
            completed_at: ''
        }
    },
    mounted() {
        if (localStorage.getItem('tareas')) {
            try {
                this.tareas = JSON.parse(localStorage.getItem('tareas'));
            }catch (e) {
                localStorage.removeItem('tareas');
            }
        }
    },
    methods:{
        agregarTarea(){
            this.$store.dispatch('agregarTarea', this);
            this.newId ++;
            this.title = '';
            this.$store.dispatch('actualizarFecha');
            this.completed_at = '';
        },
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    }

}
</script>

<style scoped>

div {
    display: flex;
    /*text-align: center;*/
    margin-left: 32%;
    padding-bottom: 20px;
}

input {
    background: transparent;
    border: solid 2px;
    padding: 7px 10px;
    border-right: none;
    width: 40%;
    color: black;
    border-color: black;
    font-size: 20px;
}


button {
    border: solid 2px;
    padding: 7px 10px;
    background: paleturquoise;
    cursor: pointer;
    width: 10%;
    color: black;
    font-size: 22px;
    text-align: center;
    vertical-align: center;
}

</style>