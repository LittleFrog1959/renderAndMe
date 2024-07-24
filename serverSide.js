const express = require ('express');
const app = express ();
app.set ('view engine', 'ejs')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = process.env.PORT || 1000;

app.get("/", (req, res) => {
    res.render ('index', {testing: 'hello June'});
    console.log ("Just printed index.ejs")
});

const userRouter = require ('./routes/users')
app.use ("/users", userRouter)

const server = app.listen(port, () => console.log ("Example app listening on port", port));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
