const express = require("express");
const cors = require("cors");
const connectDatabase = require("./db");

const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

// Availble Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/posts", require("./routes/post"));
app.use("/api/comments", require("./routes/comment"));

const port = 4000;
var ports = process.env.PORT || "4000";
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port", ports);
});
