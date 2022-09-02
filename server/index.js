const express = require("express");

require("./model");
var cors = require("cors");
const route = require("./route");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/", route);

app.use(express.urlencoded({ extended: true }));
require("./route")(app);
app.listen(4000);
