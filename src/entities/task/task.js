import moment from "moment";

export class Task{
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.completed = data.completed;
        this.created_at = data.created_at;
        this.completed_at = data.completed_at;
    }

    getDaysFromCompleted(){
        return moment(this.completed_at).fromNow();
    }
}