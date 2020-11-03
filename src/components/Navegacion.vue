<template>
        <div id="nav">
            <ul>
                <li> <router-link :to="{name: 'Home'}">{{ $t('homeNav') }}</router-link> </li>
                <li> <router-link :to="{name: 'Ystdtasks'}">{{ $t('yesterdayTasksNav') }}</router-link> </li>
                <li style="float: right"> <router-link class="logout" to="/login" v-on:click.native="$emit('logout')">{{ $t('logoutNav') }}</router-link> </li>
            </ul>
        </div>
</template>

<script>
export default {
name: "Navegacion",
}
</script>

<style scoped>

#nav {
    position: sticky;
    top: 0;
    z-index: 3;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
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