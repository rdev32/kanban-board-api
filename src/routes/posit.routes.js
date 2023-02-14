import { Router } from 'express'
import * as PositController from '../controllers/posit.controller'

const router = new Router()
router.get('/posits', PositController.getPosits)
router.get('/posits/:id', PositController.getPosit)
router.post('/posits', PositController.createPosit)
router.put('/posits/:id', PositController.updatePosit)
router.delete('/posits/:id', PositController.deletePosit)

export default router