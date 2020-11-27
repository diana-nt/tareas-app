import httpClient from './httpClient';

const path = '/17459dff-f942-4af4-add3-8b2025777039';

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