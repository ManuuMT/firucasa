import express from "express";
import cors from "cors";
import { dogRoutes, shelterRoutes, userRoutes } from "./router";
import morgan from "morgan";
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
// import { dirname, join } from "path";

const app = express();
// const __dirname = dirname(__filename);

// middlewares
app.use(morgan("dev"));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);
app.use(express.json());
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: "./upload"
    })
);
app.use(cookieParser());

// routes
app.use(shelterRoutes);
app.use(dogRoutes);
app.use(userRoutes);

// serve static files
// app.use(express.static(join(__dirname, "../client/dist")));

export default app;
