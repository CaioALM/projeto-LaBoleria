import joi from "joi";

const cakesSchema = joi.object({
    name: joi.string().trim().min(2).required(),
    price: joi.number().min(0).required(),
    description: joi.string().allow("").required(),
    image: joi.string().uri().required(),
});

export default cakesSchema;