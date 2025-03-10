import {Router} from 'express'
import financeRoutes from './finance.js'


const router  = Router()
router.use('/finance', financeRoutes)

export default router