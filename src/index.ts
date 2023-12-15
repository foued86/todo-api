import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import todoRoutes from "./routes/todo.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/todos", todoRoutes);

mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?directConnection=true&authSource=admin`
  )
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
