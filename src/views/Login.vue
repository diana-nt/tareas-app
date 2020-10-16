<template>
    <div id="login">
        <h2>Inicia sesión</h2>
        <div id="inputs">
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "Home" });
                } else {
                    console.log("The username and / or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}
</script>

<style scoped>
#login {
    width: 500px;
    border: 2px solid black;
    background-color: #e8fcff;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
}

#inputs {
    margin-left: 85px;
    display: block;
}

input {
    background: white;
    border: solid 2px;
    padding: 7px 10px;
    width: 300px;
    color: black;
    border-color: black;
    font-size: 20px;
    margin-bottom: 15px;
}

button {
    border: solid 2px;
    background: paleturquoise;
    cursor: pointer;
    width: 75px;
    margin-top: 20px;
    margin-left: 215px;
    color: black;
    font-size: 20px;
    text-align: center;
}

</style>