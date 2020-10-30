<template>
    <div class="imagesForLang">
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
    mounted() {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'es');
        }
    },
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

.imagesForLang {
    width: fit-content;
    background-color: white;
    margin-left: 10px;
    margin-top: 2px;
}

img {
    cursor: pointer;
    /*margin: 1px;*/
    padding: 2px 5px;
    border: 2px solid transparent;
}

img:hover {
    border: 2px solid #333333;
    background-color: lightcyan;
}

</style>