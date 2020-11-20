// const app = require('../server')
// import WebpackDevServer from "webpack-dev-server";
// const app = require('webpack-dev-server');
const spawn = require('cross-spawn')

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    const opts = ['--config', 'e2e/nightwatch.conf.js', '--env', 'chrome']
    const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio:
            'inherit' })

    runner.on('exit', function (code) {
        server.close()
        process.exit(code)
    })

    runner.on('error', function (err) {
        server.close()
        throw err
    })
})

