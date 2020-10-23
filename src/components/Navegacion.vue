<template>
<!--    <div>-->
        <div id="nav">
            <ul>
                <li> <router-link :to="{name: 'Home'}">Inicio</router-link> </li>
                <li> <router-link :to="{name: 'Ystdtasks'}">Completadas ayer</router-link> </li>
                <li style="float: right"> <router-link class="logout" to="/login" v-on:click.native="$emit('logout')">Logout</router-link> </li>
            </ul>
        </div>
<!--    </div>-->
</template>

<script>
export default {
name: "Navegacion",
    methods: {
    }
}
</script>

<style scoped>

#nav {
    /*width: 97vw;*/
    position: sticky;
    top: 0;
    z-index: 2;
}

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

.logout {
    background-color: paleturquoise;
    color: black;
}

</style>