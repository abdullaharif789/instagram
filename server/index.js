const express = require("express");
const connectDatabase = require("./db");
const app = express();
const port = 4000;
connectDatabase();
app.use(express.json());

// Availble Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
