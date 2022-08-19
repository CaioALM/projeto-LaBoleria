import connection from "../../database.js";

async function createClient(name, address, phone) {
    return connection.query(`
    INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3)`, 
    [name, address, phone]);
}

async function findClientById(clientId) {
    return connection.query(`
    SELECT order FROM clients 
    WHERE id = $1`, 
    [clientId]);
}

async function getOrdersByClientId(clientId) {
    return connection.query(`
    SELECT 
    o.id AS "orderId",
    o.quantity,
    o."createdAt",
    o."totalPrice",
    ca.name AS "cakeName"
    FROM clients cl
    JOIN orders o ON cl.id = o."clientId"
    JOIN cakes ca ON o."cakeId" = ca.id
    WHERE cl.id=$1`, 
  [clientId]);
}

const clientsRepository = {
    createClient,
    findClientById,
    getOrdersByClientId,
}
export default clientsRepository;
