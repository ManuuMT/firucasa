import express from "express";
import cors from "cors";
import shelterRoutes from "./router/shelter.routes";
import dogRoutes from "./router/dog.routes";
import morgan from "morgan";
import fileupload from "express-fileupload";
// import { dirname, join } from "path";

const app = express();
// const __dirname = dirname(__filename);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: "./upload"
    })
);

// routes
app.use(shelterRoutes);
app.use(dogRoutes);

// serve static files
// app.use(express.static(join(__dirname, "../client/dist")));

export default app;
