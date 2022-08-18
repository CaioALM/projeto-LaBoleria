import clientsRepository from "../repositories/clientsRepository.js"

export async function postClient(req, res ) {

    const { name, address, phone } = req.body
    try {
        const testName = name.trim();
        const testAddress = address.trim();
        const testPhone = phone.trim();

        if ( testName.length === 0) return res.status(400);
        if ( testAddress.length === 0 ) return res.status(400);
        if ( testPhone.length === 0 || typeof testPhone !== 'string') return res.status(400);

        await clientsRepository.createClient(name, address, phone);
        res.sendStatus(201);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    } 

}