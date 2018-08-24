/* define library */
const express = require('express')
const app = express()

/* define variable */
const port = 3000
const indexRoute = require('./routers/index')
const apiRoute = require('./routers/api/index')

/* define controller */

/* add route */
app.use('/', indexRoute)
app.use('/api/', apiRoute)

/* setup port server running */
app.listen(port, () => console.info(`Server is running on port: ${port}`))
