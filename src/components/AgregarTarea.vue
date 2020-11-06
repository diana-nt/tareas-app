<template>
    <div>
        <input
            type="text"
            v-model="title" name="title"
            :placeholder= "$t('addTaskPlaceholder')"
            @keyup.enter="agregarTarea(title)"
            v-focus>
        <button :disabled="!title.length" @click="agregarTarea(title)"><font-awesome-icon icon="plus" /></button>
        <span class="error" v-if="error.length">{{error}}</span>
    </div>
</template>

<script type="module">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { v4 as uuidv4 } from 'uuid';

library.add(faPlus)

export default {
name: "AgreagarTarea.vue",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            tareas: [],
            newId: null,
            title:'',
            completed: false,
            created_at: new Date(),
            completed_at: '',
            error: ''
        }
    },
    methods:{
        agregarTarea(title){
            this.error = '';
            if(title.length === 0 || !title.trim()){
                this.error = this.$t('addTaskErrorMessage');
            }else{
                this.newId = uuidv4();
                this.$store.dispatch('agregarTarea', this);
                this.$store.dispatch('actualizarFecha');
                this.completed_at = '';
                this.title = '';
            }

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
    flex-flow: row wrap;
    width: 40em;
    /*display: inherit;*/
    align-self: center;
    /*padding-bottom: 20px;*/
    padding-bottom: 1em;
    max-width: 100vw;
    overflow-x: hidden;
}

@media(max-width: 350px){
    div {
        flex-flow: nowrap;
    }
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

button:disabled{
    cursor: not-allowed;
}

button:hover{
    background-color: darkgray;
}

.error{
    color: red;
    border: 1px solid red;
    background-color: #ffe6e6;
    margin-top: 5px;
    padding: 2px;
    border-radius: 2px;
}

</style>