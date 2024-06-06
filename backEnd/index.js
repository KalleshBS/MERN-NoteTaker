const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const conn = require("./config/db");
// const router = require("./routes/routes");
const myRouter = require("./routes/routes");

const app = express();
app.use(cors(
  { origin: process.env.FRONT_END_URL, credentials: true }
));
app.use(cookieParser());

app.use(express.json());
app.use("/api", myRouter);

const port = 6061 || process.env.PORT;

app.listen(port, () => {
  console.log("....Index.js");
  console.log("Server is Running at", port);
});
