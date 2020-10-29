import { Task } from "./task";

export const mockTaskData = () => [
    {
        id: 1,
        title: 'Aprender Vue',
        completed: false,
        created_at: new Date('2017-06-01'),
        completed_at: ''
    },
    {
        id: 2,
        title: 'Lavar coche',
        completed: false,
        created_at: new Date('2018-04-23'),
        completed_at: ''
    },
    {
        id: 3,
        title: 'Pasar la aspiradora',
        completed: false,
        created_at: new Date('2019-11-30'),
        completed_at: ''
    },
    {
        id: 4,
        title: 'Hacer trabajo de clase',
        completed: true,
        created_at: new Date('2019-02-10'),
        completed_at: 25
    },
    {
        id: 5,
        title: 'Comprar impresora',
        completed: false,
        created_at: new Date('2004-08-13'),
        completed_at: ''
    }
]

export const mockTasks = (data = mockTaskData()) => data.map(item => new Task(item))