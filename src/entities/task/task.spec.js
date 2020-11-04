import {Task} from "./task";
import {describe, it} from "@jest/globals";

const expect = require('chai').expect;

//Comprobar que tarea es una instancia de task


describe('Task entity', () => {
    describe('constructor', () => {
        it('cannot instantiate class if title is null', () => {
            let badFn = function () {
                let tareaFalsa = {
                    id: 1,
                    title: null,
                    completed: true,
                    created_at: 0,
                    completed_at: Date.now()
                }
                return new Task(tareaFalsa);
            }
            expect(badFn).to.throw(TypeError);
        })
        it('creates instance if parameters are correct', () => {
            let tareaFalsa = {
                id: 1,
                title: 'Tarea falsa',
                completed: true,
                created_at: 0,
                completed_at: Date.now()
            }
            let tarea = new Task(tareaFalsa);
            expect(tarea).to.be.instanceOf(Task);
        })
    })
    describe('method getDaysFromCompleted', () => {
        it('returns number of days that have passed since a task was completed', () => {
            let fechaActual = new Date();
            let fechaPasada = new Date(fechaActual);
            fechaPasada.setDate(fechaPasada.getDate() - 8);
            let tareaFalsa = {
                id: 1,
                title: 'Tarea falsa',
                completed: true,
                created_at: 0,
                completed_at: fechaPasada
            }
            let tarea = new Task(tareaFalsa);
            expect(tarea.getDaysFromCompleted()).to.equal(8);
        })
    })
    
})


