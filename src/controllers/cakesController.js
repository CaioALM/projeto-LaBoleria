import cakesRepository from "../repositories/cakesRepository.js";



export async function postCakes(req, res) {
    const { name, price, image, description } = req.body
    try {
        
        const { rowCount: cakeName } = await cakesRepository.getCakeName(name) 

        if ( cakeName !== 0 ) return res.sendStatus(409);
        
        await cakesRepository.createCakes(name, price, image, description);
        return res.sendStatus(201)

    } catch(error) {
        console.log(error);
        res.status(500)
    }

}