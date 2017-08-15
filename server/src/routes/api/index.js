import { Router } from "express";
import boardsRoutes from "./boards";
import threadRoutes from "./threads";
const api = Router();

api.use("/boards", boardsRoutes);
api.use("/threads", threadRoutes);

api.get("/", (req, res) => {
  res.send("Welcome to the 4chan API");
});

export default api;
