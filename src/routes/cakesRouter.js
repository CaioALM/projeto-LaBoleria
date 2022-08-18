 import { Router } from "express"
 import { postCakes }  from "../controllers/cakesController.js";
 import validateSchema from "../middlewares/validateSchema.js";
import cakesSchema from "../schemas/cakesSchema.js";

 const cakesRouter = Router();

 cakesRouter.post("/cakes", validateSchema(cakesSchema), postCakes)

 export default cakesRouter;
