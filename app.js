const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
// const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.options("*", cors()); // ye abi add kia
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/api/projects", projectRoutes);
// app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
