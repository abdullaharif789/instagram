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
app.use("/api/user", require("./routes/user"));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
