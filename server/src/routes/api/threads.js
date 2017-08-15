import { Router } from "express";
import threadsControllers from "../../controllers/threads";
const threads = Router();

threads.get("/:id", threadsControllers.get.getOne);

export default threads;
