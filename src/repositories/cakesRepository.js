import connection from "../../database.js";


async function createCakes(name, price, image, description) {
    return connection.query(`INSERT INTO cakes (name, price, image, description) 
    VALUES ($1, $2, $3, $4)`, 
    [name, price, image, description]);
}

async function getCakeName(name){
    return connection.query(`SELECT * FROM cakes WHERE name = $1`, 
    [name]);
    
}

const cakesRepository = {
    createCakes,
    getCakeName,
}
export default cakesRepository;
