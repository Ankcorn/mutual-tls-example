const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const extract = require("./extract");

const PORT = 3050;

const app = express();
app.use(cors())
app.use(morgan("dev"));
app.use(bodyParser.json());

app.post("/api/extract", extract);

app.listen(PORT, () => {
  console.log(`API Server started on port: ${PORT}`);
});
