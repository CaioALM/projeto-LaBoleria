import { Router } from "express"
import validateClient from "../middlewares/validadeClient.js";
import clientsSchema   from "../schemas/clientsSchema.js";
import { postClient, getClientsOrders } from "../controllers/clientsController.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateClient(clientsSchema), postClient);
clientsRouter.get("/clients/:id/orders", getClientsOrders);

export default clientsRouter;