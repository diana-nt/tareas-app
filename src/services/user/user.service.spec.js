import {describe, it} from "@jest/globals";
import {UserService} from './user.service.js';
const expect = require('chai').expect;


describe('User Service', () => {
    describe('Login method', () => {
        it('return true if account equals mockAccount', () => {
            let account = {
                username: "diana",
                password: "1234"
            }
            let resultLogin = UserService.login(account);
            expect(resultLogin).to.be.true;
        })
        it('returns false if the account does not match mockAccount', () => {
            let account = {
                username: "qwerty",
                password: "asdf"
            }
            let resultLogin = UserService.login(account);
            expect(resultLogin).to.be.false;
        })
    })
})