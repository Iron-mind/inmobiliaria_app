const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const initMongoose = require("./src/config/config");
const router = require("./src/routes/index");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("API is running...");
});



initMongoose.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
