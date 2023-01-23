import joi from "joi"

const filmsSchema = joi.object({
    name: joi.string().required(),
    genre_id: joi.number().integer().required(),
    platform_id: joi.number().integer().required(),
    note: joi.string(),
    status: joi.string().required()
})

export default filmsSchema