/* define library */
const express = require("express");
const app = express();

/* define variable */
const port = 3000
const indexRoute = require("./routers/index")

/* define controller */

/* add route */
app.use('/', indexRoute)


/* setup port server running */
app.listen(port, () => console.info(`Server is running on port: ${port}`));
