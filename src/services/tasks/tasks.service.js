import moment from "moment";

export class TaskService {

    /**
     *
     * input void
     * output array
     * Pide tareas a localStorage y las devuelve como array
     *
     * */
    static getTasksFromStorage(){
        return JSON.parse(localStorage.getItem('tareas')) || [];
    }

    /**
     *
     * input tasks
     * output boolean
     * Guardar tareas en LocalStorage y devolver si se han guardado true y si no false
     *
     * */
    static saveTasksInStorage(tasks){
        return localStorage.setItem('tareas', JSON.stringify(tasks));
    }

    static addTaskToStorage(newTask){
        let oldTasks = this.getTasksFromStorage();
        let newTasks = [...oldTasks, newTask];
        if(localStorage.getItem('tareas')){
            localStorage.removeItem('tareas');
        }
        return this.saveTasksInStorage(newTasks);
    }

    static getCompletedTasks(){
        let completadas = [];
        let tasks = this.getTasksFromStorage()
        tasks.forEach((task) => {
            if (task.completed) {
                completadas = [...completadas, task];
            }
        })
        return completadas;
    }

    static getTasksCompletedYesterday(){
        let completadas = this.getCompletedTasks();
        let yesterday = moment().subtract(1, 'days').toDate();
        let completadasAyer = [];
        completadas.forEach((completada) =>{
            console.log(new Date(completada.completed_at).toDateString())
            console.log(new Date(yesterday).toDateString())
            if(new Date(completada.completed_at).toDateString() === new Date(yesterday).toDateString()){
                completadasAyer = [...completadasAyer, completada];
            }
        })
        console.log(completadasAyer)
        return completadasAyer;
    }


}
