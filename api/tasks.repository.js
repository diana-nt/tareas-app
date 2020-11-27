import httpClient from './httpClient';

const path = 'tasks';

/*const getAllTasks = () => httpClient.get(path);
const getTask = (task_id) => httpClient.get(path, { task_id });
const createTask = (id, title, completed, created_at, completed_at) => httpClient.post(path, { id, title, completed, created_at, completed_at });*/

/*
export {
    getAllTasks,
    getTask,
    createTask
}*/

export default {
    async getAllTasks() {
        return await httpClient.get(path);
    }
}