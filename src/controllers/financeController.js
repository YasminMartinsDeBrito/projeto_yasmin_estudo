import { Receita, Despesa }  from '../models/index.js';

const createReceita = async (req, res) => {
    try {
        const receita = await Receita.create(req.body);
        req.status(201).json(receita)
    }catch(err){
        res.status(500).json({error: err.message});
    }
}
const createDespesa = async(req, res) => {
    try {
        const despesa = await Despesa.create(req.body);
        res.status(201).json(despesa)
    }catch (err){
        res.status(500).json({error: err.message})
    }
}

export default { createDespesa, createReceita};