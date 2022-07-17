import { Router } from "express";

import auth from "../middlewares/auth";
import * as DoughController from "../controllers/dough";

const DoughRouter = Router();

DoughRouter.get("/list", auth, DoughController.list);
DoughRouter.post("/add", auth, DoughController.add);
DoughRouter.put("/modify", auth, DoughController.modify);
DoughRouter.delete("/erase", auth, DoughController.erase);

export default DoughRouter;
