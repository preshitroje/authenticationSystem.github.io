const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//.env config
dotenv.config();

//mongog connection
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "server running",
//   });
// });

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `server running on ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
