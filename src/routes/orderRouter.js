import { Router } from "express"
import validateSchema from "../middlewares/validadeSchema.js";
import orderSchema   from "../schemas/clientsSchema.js";
import { postOrder } from "../controllers/clientsController.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateClient(clientsSchema), postClient);

export default clientsRouter;