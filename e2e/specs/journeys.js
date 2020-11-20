module.exports = {
    'step one: takes user to the login page': function(browser) {
        browser
            .url('http://localhost:8080')
            .assert.urlContains('/login')
            .waitForElementVisible('.login', 2000)
    },

    'step two: login redirects to home page': function (browser) {
        browser
            /*.url('http://localhost:8080')
            .waitForElementVisible('.login', 2000)*/
            .setValue('input[name="username"]', 'diana')
            .setValue('input[name="password"]', '1234')
            .click('button')
            .waitForElementVisible('.taskList', 15000)
            .assert.urlContains('/home')
    },

    'step three: adding a task changes taskList data': function (browser) {
        let originalTaskListText;
        browser
            /*.url('http://localhost:8080/home')
            .waitForElementVisible('.taskList', 15000)*/
            .getText('.taskList', function (result) {
                originalTaskListText = result.value
            })
            .setValue('input[name="title"]', 'New Task')
            .click('button[name="btn_addTask"]')
            .perform(() => {
                browser.expect.element('.taskList').text.to.not.equal(originalTaskListText)
            })
    },

    'step four: "Completadas ayer" redirects to /ystdtasks': function (browser) {
        browser
            .click('.ystdtasks-link')
            .waitForElementVisible('.ystdtasks-title', 15000)
            .assert.urlContains('/ystdtasks')
    },

    'step four: "Cerrar sesión" redirects to login page': function (browser) {
        browser
            .click('.logout')
            .assert.urlContains('/login')
            .waitForElementVisible('.login', 15000)
            .end();
    }
}
