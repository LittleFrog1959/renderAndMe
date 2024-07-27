// Load express, declare an express object & tell it what view engine we want to use
const express = require ('express');
const app = express ();
app.set ('view engine', 'ejs')

// Set various configuration parameters in express
//      The root location of static html files.  Can contain directories if required
//          Note that the home page of the site is in here which is quite neat
//      ??
//      ??
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Not sure what this does but basically, if the port we want the server to listen on is not
//defined by the process controlling this program then default it to 1000
const port = process.env.PORT || 1000;

// Declare a router (defined in routes/users) and attach it to URL's starting with /users
const userRouter = require ('./routes/users')
app.use ("/users", userRouter)
const loginRouter = require ('./routes/login')
app.use ("/login", loginRouter)
const courtRouter = require ('./routes/court')
app.use ("/court", courtRouter)
const squadRouter = require ('./routes/squad')
app.use ("/squad", squadRouter)

// Start the server with a log message
const server = app.listen(port, () => console.log ("Example app listening on port", port));

// Settings required by Render.  These don't seem to upset the program when run locally
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;