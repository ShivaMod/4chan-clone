import { Router } from "express";
import threadsControllers from "../../controllers/threads";
const threads = Router();

// gets
threads.get("/:id", threadsControllers.get.getOne);

// posts
threads.post("/", threadsControllers.create.createNewThread);

export default threads;
