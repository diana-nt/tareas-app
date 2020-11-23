module.exports = {
    'step one: takes user to the login page': function(browser) {
        browser
            .url('http://localhost:8080')
            .assert.urlContains('/login')
            .waitForElementVisible('.login', 2000)
    },

    'step two: incorrect login spans error': function (browser) {
        browser
            .setValue('input[name="username"]', 'asdf')
            .setValue('input[name="password"]', 'qwer')

            .click('button')
            .waitForElementVisible('.error', 15000)
    },

    'step three: correct login redirects to home page': function (browser) {
        browser
            .clearValue('input[name="username"]')
            .setValue('input[name="username"]', 'diana')

            .setValue('input[name="password"]', '1234')
            .clearValue('input[name="password"]')
            .setValue('input[name="password"]', '1234')

            .click('button')
            .waitForElementVisible('.taskList', 15000)
            .assert.urlContains('/home')
    },

    'step four: adding a task changes taskList data': function (browser) {
        let originalTaskListText;
        browser
            .getText('.taskList', function (result) {
                originalTaskListText = result.value
            })
            .setValue('input[name="title"]', 'New Task')
            .click('button[name="btn_addTask"]')
            .perform(() => {
                browser.expect.element('.taskList').text.to.not.equal(originalTaskListText)
            })
    },

    'step five: "Completadas ayer" redirects to /ystdtasks': function (browser) {
        browser
            .click('.ystdtasks-link')
            .waitForElementVisible('.ystdtasks-title', 15000)
            .assert.urlContains('/ystdtasks')
    },

    'step six: "Cerrar sesion" redirects to login page': function (browser) {
        browser
            .click('.logout')
            .assert.urlContains('/login')
            .waitForElementVisible('.login', 15000)
    },

    after: function (browser) {
        browser.end();
    }
}
