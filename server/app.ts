import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express");
});
// middlewares
app.use(cors());
app.use(express.json());

// routes
// app.use(postsRoutes);

export default app;
