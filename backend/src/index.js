const Express = require('express')
const setupDabase = require('../setup/database.js')
const setUpMiddleware = require('../setup/middleware')
const setUpRouter = require('../setup/router')

const app = Express()

setUpMiddleware(app)

setUpRouter(app)

setupDabase()
    .then((client) => {
        console.log(client)

        setUpRouter(app, client)

        app.listen(4000, () => {
            console.log('Server stared on port 4000');
        })
    })
    .catch(console.error)


