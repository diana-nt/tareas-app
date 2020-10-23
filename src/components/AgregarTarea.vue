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
    width: 40em;
    /*display: inherit;*/
    align-self: center;
    /*padding-bottom: 20px;*/
    padding-bottom: 1em;
    max-width: 100vw;
}

input {
    background: transparent;
    border: solid 2px;
    padding: 7px 10px;
    /*padding: .3em .4em;*/
    border-right: none;
    width: inherit;
    max-width: 80%;
    /*width: 26em;
    max-width: inherit;*/
    color: black;
    border-color: black;
    /*font-size: 20px;*/
    font-size: 1.3rem;
}

input[type=text]:focus {
    outline: none;
    border: 2px solid paleturquoise;
}


button {
    justify-content: space-evenly;
    border: solid 2px;
    display: flex;
    /*padding: 7px 30px;*/
    padding: .32em 1.5em;
    background: paleturquoise;
    cursor: pointer;
    color: black;
    font-size: 22px;
    /*width: 5em;
    max-width: inherit;*/
    max-width: 20%;
    width: inherit;
}

</style>