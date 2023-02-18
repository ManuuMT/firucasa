import express from "express";
import cors from "cors";
import usersRoutes from "./router/users.routes";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(usersRoutes);

export default app;
