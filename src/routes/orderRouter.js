import { Router } from "express";
import validateOrder from "../middlewares/validateOrder.js";
import orderSchema   from "../schemas/orderSchema.js";
import { postOrder, getOrder, getOrderParams } from "../controllers/orderController.js";

const clientsRouter = Router();

clientsRouter.post("/order", validateOrder(orderSchema), postOrder);
clientsRouter.get("/orders", getOrder);
clientsRouter.get("/orders/:id", getOrderParams);


export default clientsRouter;