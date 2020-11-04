import {Task} from "./task";
import {describe, it} from "@jest/globals";
const expect = require('chai').expect;

const tareaFalsa = {
    id: 1,
    title: 'Tarea falsa',
    completed: true,
    created_at: 0,
    completed_at: Date.now()
}

describe('Task entity', () => {
    describe('constructor', () => {
        it('cannot instantiate class if title is null', () => {
            let badFn = function () {
                let tareaFalsa2 = [...tareaFalsa];
                tareaFalsa2.title = null;
                return new Task(tareaFalsa);
            }
            expect(badFn).to.throw(TypeError);
        })
        it('creates instance if parameters are correct', () => {
            let tarea = new Task(tareaFalsa);
            expect(tarea).to.be.instanceOf(Task);
        })
    })
    describe('method getDaysFromCompleted', () => {
        it('returns number of days that have passed since a task was completed', () => {
            let fechaActual = new Date();
            let fechaPasada = new Date(fechaActual);
            fechaPasada.setDate(fechaPasada.getDate() - 8);
            tareaFalsa.completed_at = fechaPasada;
            let tarea = new Task(tareaFalsa);
            expect(tarea.getDaysFromCompleted()).to.equal(8);
        })
    })
    
})


