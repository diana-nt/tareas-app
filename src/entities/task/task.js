import moment from "moment";
// import {i18n} from "../../plugins/i18n";
// moment.locale('es')

export class Task{
    constructor(data) {
        this.id = data.id;
        if(!data.title) {
            throw new TypeError('A title is needed!')
        }else{
            this.title = data.title;
        }
        this.completed = data.completed;
        this.created_at = data.created_at;
        this.completed_at = data.completed_at;
    }

    getDaysFromCompleted(){
        // return moment(this.completed_at).fromNow();
        let fechaActual = moment(Date.now());
        let fechaCompletado = moment(this.completed_at);
        // console.log(fechaActual.diff(fechaCompletado, 'days'))
        return fechaActual.diff(fechaCompletado, 'days')
    }
}