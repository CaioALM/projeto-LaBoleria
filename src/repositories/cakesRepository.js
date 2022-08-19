import connection from "../../database.js";


async function createCakes(name, price, image, description) {
    return connection.query(`
    INSERT INTO cakes (name, price, image, description) 
    VALUES ($1, $2, $3, $4)`, 
    [name, price, image, description]);
}

async function getCakeName(name){
    return connection.query(`
    SELECT * FROM cakes 
    WHERE name = $1`, 
    [name]);
}
async function findCakeById(cakeId){
    return connection.query(`
    SELECT * FROM cakes 
    WHERE id = $1`, 
    [cakeId]);
}

const cakesRepository = {
    createCakes,
    getCakeName,
    findCakeById
}

export default cakesRepository;
