import connection from "../../database.js";

export default function cakesRepository(){
    return {
        async createCakes(name, price, image, description) {
            return connection.query(`INSERT INTO cakes (name, price, image, description) 
            VALUES ($1, $2, $3, $4)`, 
            [name, price, image, description]);
        },

        async getCakeName(name){
            return connection.query(`SELECT * FROM cakes WHERE name = $1`, 
            [name]);
        },
};
}