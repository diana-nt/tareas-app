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

            // this.changeSelected();
            // this.$forceUpdate();
            // location.reload();
        },
        switchLocaleToEnglish() {
            this.$i18n.locale = 'en';
            localStorage.setItem('lang', 'en');
            moment.locale('en');

            // this.changeSelected();
            // this.$forceUpdate();
            // location.reload();
        },
       /* changeSelected(){
            if(this.selected === 'Tasks' || this.selected === 'Tareas'){
                this.selected = this.$t('option1');
            } else if(this.selected === 'Pending' || this.selected === 'Pendientes'){
                this.selected = this.$t('option2');
            } else if(this.selected === 'Finished' || this.selected === 'Finalizadas'){
                this.selected = this.$t('option3');
            }
        }*/
    },
}
</script>

<style scoped>

img {
    cursor: pointer;
    padding: 2px 5px;
    border: 2px solid transparent;
}

img:hover {
    border: 2px solid paleturquoise;
}

</style>