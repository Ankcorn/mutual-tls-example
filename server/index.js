const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const extract = require("./extract");

const PORT = 3050;
const HOST = '0.0.0.0';
const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(bodyParser.json());

app.post("/api/extract", extract);
app.get('/',(_,r)=>r.send(
 `<html>
    <body>
        <h1>Hai</h1>
        <p>The fat lazy cat sat on the mat <br /> https is on</p>
    </body>
    </html>
  `
))
app.listen(PORT, HOST, () => {
  console.log(`API Server started on port: ${PORT}`);
});
