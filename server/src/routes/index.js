import apiRoutes from "./api";
import {Router} from "express";
// TODO: Look into if this is right/okay...
const app = Router();

// define all routes here.
app.use('/api', apiRoutes);

export default app;
