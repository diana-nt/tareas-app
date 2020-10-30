<template>
    <div>
        <img src="../icons/spain.png" @click="switchLocaleToSpanish"> |
        <img src="../icons/united-kingdom.png" @click="switchLocaleToEnglish">
    </div>
</template>

<script>
import moment from "moment";

export default {
name: "LocaleSwitcher",
/*    data() {
        return {
            locales: ['es', 'en'],
        }
    },*/

    methods: {
        switchLocaleToSpanish() {
            this.$i18n.locale = 'es';
            localStorage.setItem('lang', 'es');
            moment.locale('es');
        },
        switchLocaleToEnglish() {
            this.$i18n.locale = 'en';
            localStorage.setItem('lang', 'en');
            moment.locale('en');
        },
    },
}
</script>

<style scoped>

/*li {
    text-decoration: underline;
    color: #459CE7;
    cursor: pointer;
}*/

img {
    cursor: pointer;
    /*margin: 1px;*/
    padding: 2px 5px;
    border: 2px solid transparent;
}

img:hover {
    border: 2px solid paleturquoise;
    /*background-color: darkgray;*/
}

</style>