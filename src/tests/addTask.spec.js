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

    describe('the user populates the text input field', () => {
        let inputField;
        beforeEach(() => {
            inputField = wrapper.find('input');
            inputField.element.value = 'New Task';
            inputField.trigger('input');

        });
        it('should update the "text" data property', () => {
            expect(wrapper.vm.title).to.equal('New Task');
        });
        it('should enable the "+" button when text input is populated', () => {
            const addItemButton = wrapper.find('button');
            expect(addItemButton.element.disabled).to.be.false;
        });
        describe('and then clears the input', () => {
            it('should disable the "+" button', () => {
                const addItemButton = wrapper.find('button');
                inputField.element.value = '';
                inputField.trigger('input');

                expect(addItemButton.element.disabled).to.be.true;
            });
        });
    });

})