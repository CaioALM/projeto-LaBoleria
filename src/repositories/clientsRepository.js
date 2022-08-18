import connection from "../../database.js";

async function createClient(name, address, phone) {
    return connection.query(`
    INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3)`, 
    [name, address, phone]);
}

const clientsRepository = {
    createClient
}
export default clientsRepository;
