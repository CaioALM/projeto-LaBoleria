import clientsRepository from "../repositories/clientsRepository.js"
import cakesRepository from "../repositories/cakesRepository.js";
import orderRepository from "../repositories/orderRepository.js";

export async function postOrder(req, res ) {

    const { clientId, cakeId, quantity, totalPrice } = req.body

    try {
      
        const { rowCount: clients } = await clientsRepository.findClientById(clientId);
        const { rowCount: cakes } = await cakesRepository.findCakeById(cakeId);

        if (clients === 0 || cakes === 0) return res.sendStatus(404);

        await orderRepository.createOrder(clientId, cakeId, quantity, totalPrice);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    } 

}
export async function getOrder(req, res ) {
    const { date } = req.query;
    console.log(date)
    try {
        if ( !date ) {
            const orders  = await orderRepository.getOrders();
            const orderResult = orders.rows.map((order) => ({
                client: {
                  id: order.clientId,
                  name: order.clientName,
                  address: order.clientAddress,
                  phone: order.clientPhone,
                },
                cake: {
                  id: order.cakeId,
                  name: order.cakeName,
                  price: order.cakePrice,
                  description: order.cakeDescription,
                  image: order.cakeImage,
                },
                orderId: order.id,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice,
              }));
            
            res.status(200).send(orderResult)
        } else {
            const orders = await orderRepository.getOrdersByDate(date);
            const orderResultByDate = orders.rows.map((order) => ({
                client: {
                    id: order.clientId,
                    name: order.clientName,
                    address: order.clientAddress,
                    phone: order.clientPhone,
                  },
                  cake: {
                    id: order.cakeId,
                    name: order.cakeName,
                    price: order.cakePrice,
                    description: order.cakeDescription,
                    image: order.cakeImage,
                  },
                  orderId: order.id,
                  createdAt: order.createdAt,
                  quantity: order.quantity,
                  totalPrice: order.totalPrice,
              }));
        
            if( orderResultByDate.length === 0) return res.status(404).send([]);
            res.status(200).send(orderResultByDate);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    } 

}
export async function getOrderParams(req, res ) {

    const { id } = req.params

    try {
        
        const orders = await orderRepository.getOrdersById(id);

        if (orders.rowCount === 0) return res.status(404).send([]);
        
            const orderResultById = {
                client: {
                    id: orders.rows[0].clientId,
                    name: orders.rows[0].clientName,
                    address: orders.rows[0].clientAddress,
                    phone: orders.rows[0].clientPhone,
                  },
                  cake: {
                    id: orders.rows[0].cakeId,
                    name: orders.rows[0].cakeName,
                    price: orders.rows[0].cakePrice,
                    description: orders.rows[0].cakeDescription,
                    image: orders.rows[0].cakeImage,
                  },
                  orderId: orders.rows[0].id,
                  createdAt: orders.rows[0].createdAt,
                  quantity: orders.rows[0].quantity,
                  totalPrice: orders.rows[0].totalPrice,
              }

            res.status(200).send(orderResultById);
    
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    } 

}


