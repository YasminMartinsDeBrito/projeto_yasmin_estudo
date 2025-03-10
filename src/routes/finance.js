import { Router } from 'express'
import financeController from '../controllers/financeController.js'
import validateFinance from '../validations/financeValidation.js'

const router = Router()

router.post('/receitas', validateFinance, financeController.createReceita);
router.post('/despesas', validateFinance, financeController.createDespesa);

export default router;