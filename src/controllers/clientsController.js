import clientsRepository from "../repositories/clientsRepository.js"

export async function postClient(req, res ) {

    const { name, address, phone } = req.body
    try {
      
        await clientsRepository.createClient(name, address, phone);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    } 

}
export async function getClientsOrders(req, res ) {
    const { id } = req.params

    try {
        
        const orders = await clientsRepository.getOrdersByClientId(id);

        const ordersByClientId = orders.rows.map((client) => ({
            orderId: client.orderId,
            quantity: client.quantity,
            createdAt: client.createdAt,
            totalPrice: client.totalPrice,
            cakeName: client.cakeName,
          }));
      
          if (ordersByClientId.length === 0) {
            return res.sendStatus(404);
          } else {
            res.status(200).send(ordersByClientId);
          }
    
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    } 

}