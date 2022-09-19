const express = require("express");
const cors = require("cors");
const connectDatabase = require("./db");
const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());

connectDatabase();

// Availble Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/posts", require("./routes/post"));

var ports = process.env.PORT || "3000";
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port", ports);
});
