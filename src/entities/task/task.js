import moment from "moment";
// import {i18n} from "../../plugins/i18n";
// moment.locale('es')

export class Task{
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
        this.created_at = data.created_at;
        this.completed_at = data.completed_at;
    }

    getDaysFromCompleted(){
        /*if(i18n.locale === 'es'){
            moment.locale('es')
        }*/
        return moment(this.completed_at).fromNow();
    }
}