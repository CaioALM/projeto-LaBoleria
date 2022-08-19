import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.js";
import clientsSchema   from "../schemas/clientsSchema.js";
import { postClient, getClientsOrders } from "../controllers/clientsController.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientsSchema), postClient);
clientsRouter.get("/clients/:id/orders", getClientsOrders);

export default clientsRouter;