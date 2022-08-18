import  cakesRepository  from "../repositories/cakesRepository.js";

export async function postCakes(req, res) {
    const { name, price, image, description } = req.body
    try {
        
        const { rowCount: cakeName } = await cakesRepository.getCakeName(name); 

        const testName = name.trim();
        const testPrice = price.trim();

        if ( testName.length < 2  ) return res.sendStatus(400);
        if ( cakeName !== 0 ) return res.sendStatus(409);
        if ( price < 0 || testPrice.length === 0 ) return res.sendStatus(400);
        if ( typeof description !== "string" ) return res.sendStatus(400);
        
        await cakesRepository.createCakes(name, price, image, description);
        return res.sendStatus(201)

    } catch(error) {
        console.log(error);
        res.status(500)
    }

}