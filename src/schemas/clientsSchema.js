import joi from 'joi';

const clientsSchema = joi.object({
    name: joi.string().trim().required(),
    address: joi.string().trim().required(),
    phone: joi.string().trim().min(10).max(11).required(),
  });
  
  export default clientsSchema;