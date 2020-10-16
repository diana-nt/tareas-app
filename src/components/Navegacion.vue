<template>
    <div>
        <div id="nav">
            <!--<RouterLink to="/">Home</RouterLink> |
            <RouterLink :to="{name: 'ystdtasks'}">Tareas completadas ayer</RouterLink>-->
            <ul>
                <li> <router-link :to="{name: 'Home'}">Home</router-link> </li>
                <li> <router-link :to="{name: 'Ystdtasks'}">Tareas completadas ayer</router-link> </li>
<!--                <li> <router-link :to="{name: 'Login'}">Login</router-link></li>-->
                <li style="float: right"> <router-link class="active" to="/login" v-on:click.native="$emit('logout')" replace>Logout</router-link> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
name: "Navegacion",
    methods: {
    }
}
</script>

<style scoped>

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: darkgray;
}

/*li a:active {
    background-color: paleturquoise;
}*/

.active {
    background-color: paleturquoise;
    color: black;
}

</style>