import AgregarTarea from "../components/AgregarTarea.vue";
import { shallowMount} from "@vue/test-utils";
import {beforeEach, describe, it} from "@jest/globals";
const expect = require('chai').expect;

describe('Add task component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(AgregarTarea, {
            mocks: {
                $t: () => {},
                $tc: () => {},
                $n: () => {}
            }
        });
    })

    it('should have the "+" button disabled', () => {
        const addTaskButton = wrapper.find('button');
        expect(addTaskButton.element.disabled).to.be.true;
    });

    describe('the user populates the text input field', () => {
        let inputField;
        let addTaskButton;
        beforeEach(() => {
            inputField = wrapper.find('input');
            inputField.element.value = 'New Task';
            inputField.trigger('input');

            addTaskButton = wrapper.find('button');
        });
        it('should update the "text" data property', () => {
            expect(wrapper.vm.title).to.equal('New Task');
        });
        it('should enable the "+" button when text input is populated', () => {
            // const addTaskButton = wrapper.find('button');
            expect(addTaskButton.element.disabled).to.be.false;
        });
        /*describe('and then clears the input', () => {
            it('should disable the "+" button', () => {
                // const addTaskButton = wrapper.find('button');

                inputField.element.value = '';
                inputField.trigger('input');

                expect(addTaskButton.element.disabled).to.be.true;
            });
        });*/
    });

    describe('and then submits the task', () => {
        let addTaskButton;
        let inputField;

        beforeEach(() => {
            addTaskButton = wrapper.find('button');
            inputField = wrapper.find('input');
            wrapper.setData({tareas: ['New Task']});
            addTaskButton.trigger('click');
        });

        it('should add a new task to the "tareas" data property', () => {
            expect(wrapper.vm.tareas).to.contain('New Task');
        });

        it('should clear the input', () => {
            expect(inputField.element.value).to.equal('');
        });

        it('should disable the "+" button', () => {
            expect(addTaskButton.element.disabled).to.be.true;
        })
    })

})