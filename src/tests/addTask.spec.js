import AgregarTarea from "../components/AgregarTarea";
import {describe, it} from "@jest/globals";
const expect = require('chai').expect;

describe('AgregarTarea component', () => {
    it('has method agregarTarea', () => {
        expect(AgregarTarea.methods.agregarTarea()).to.exist;
    })
})
