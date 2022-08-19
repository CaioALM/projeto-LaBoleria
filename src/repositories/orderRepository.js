import connection from "../../database.js";

async function createOrder(clientId, cakeId, quantity, totalPrice) {
    return connection.query(`
    INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") 
    VALUES ($1, $2, $3, $4, LOCALTIMESTAMP(0))`, 
    [clientId, cakeId, quantity, totalPrice ]);
}

async function getOrders() {
   return connection.query(`
   SELECT o.*,
   cl.id AS "clientId",
   cl.name AS "clientName",
   cl.address AS "clientAddress",
   cl.phone AS "clientPhone",
   ca.id AS "cakeId",
   ca.name AS "cakeName",     
   ca.price AS "cakePrice",
   ca.image AS "cakeImage",
   ca.description AS "cakeDescription"
   FROM orders o
   JOIN clients cl ON o."clientId" = cl.id
   JOIN cakes ca ON ca.id = o."cakeId"`);
}
async function getOrdersByDate(date) {
    return connection.query(`
    SELECT o.*,
    cl.id AS "clientId",
    cl.name AS "clientName",
    cl.address AS "clientAddress",
    cl.phone AS "clientPhone",
    ca.id AS "cakeId",
    ca.name AS "cakeName",     
    ca.price AS "cakePrice",
    ca.image AS "cakeImage",
    ca.description AS "cakeDescription"
    FROM orders o
    JOIN clients cl ON o."clientId" = cl.id
    JOIN cakes ca ON ca.id = o."cakeId"
    WHERE o."createdAt" LIKE $1`, [`${date}%`]
    );
}
async function getOrdersById(id) {
    return connection.query(`
    SELECT o.*,
    cl.id AS "clientId",
    cl.name AS "clientName",
    cl.address AS "clientAddress",
    cl.phone AS "clientPhone",
    ca.id AS "cakeId",
    ca.name AS "cakeName",     
    ca.price AS "cakePrice",
    ca.image AS "cakeImage",
    ca.description AS "cakeDescription"
    FROM orders o
    JOIN clients cl ON o."clientId" = cl.id
    JOIN cakes ca ON ca.id = o."cakeId"
    WHERE o."id" = $1`, [id]
    );
}

const orderRepository = {
    createOrder,
    getOrders,
    getOrdersByDate,
    getOrdersById
}
export default orderRepository;
