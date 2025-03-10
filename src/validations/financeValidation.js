import Joi from "joi";

const financeSchema = Joi.object({
    descricao: Joi.string().required(),
    valor: Joi.number().positive().required(),
    data: Joi.date().iso().required()
})

const validateFinance = (req, res, next) => {
    const { error } = financeSchema.validate(req.body)
    if(error) return res.status(400).json({error: error.details[0].message})
    next();
}

export default validateFinance