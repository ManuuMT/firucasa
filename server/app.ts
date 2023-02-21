import express from "express";
import cors from "cors";
import usersRoutes from "./router/users.routes";
import dogsRoutes from "./router/dogs.routes";
import morgan from "morgan";
import fileupload from "express-fileupload";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// routes
app.use(usersRoutes);
app.use(dogsRoutes);

export default app;
