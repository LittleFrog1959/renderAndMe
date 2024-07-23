const express = require ('express');
const app = express ();
const port = process.env.PORT || 1000;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render And Me</title>
  </head>
  <body>
    <section>
      Hello from dgw
    </section>
  </body>
</html>
`

