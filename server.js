import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());

app.listen(process.env.DB_PORT, () =>
  console.log("server is running in http://localhost:2000")
);
