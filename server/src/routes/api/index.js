import { Router } from "express";
import boardsRoutes from "./boards";
const api = Router();

api.use("/boards", boardsRoutes);

api.get("/", (req, res) => {
  res.send("Welcome to the 4chan API");
});

export default api;
