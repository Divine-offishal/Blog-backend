const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const blogRoute = require("./routes/blogRoutes");
const authorRoute = require("./routes/authorRoutes");
dotenv.config();

connectDb();

app.use(express.json());

app.use("/api/v1", blogRoute);
app.use("/api/v1", authorRoute);

app.listen(
  process.env.PORT,
  console.log(`Server is running on port ${process.env.PORT}`)
);
