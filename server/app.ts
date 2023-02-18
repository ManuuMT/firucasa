import express from "express";
import cors from "cors";
import usersRoutes from "./router/users.routes";
import morgan from "morgan";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use(usersRoutes);

export default app;
