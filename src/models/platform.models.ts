import joi from "joi"

const platformSchema = joi.object({
    name: joi.string().required(),
  })

export default platformSchema