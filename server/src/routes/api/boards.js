import { Router } from "express";
import boardControllers from "../../controllers/boards";
const boards = Router();

boards.get("/", boardControllers.get.getAll);

boards.get("/:id", boardControllers.get.getOne);

export default boards;
