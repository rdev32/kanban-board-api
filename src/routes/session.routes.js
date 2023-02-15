import { Router } from 'express'
import * as SessionController from '../controllers/session.controller'

const router = new Router()

router.get('/sessions', SessionController.getSessions)
router.get('/sessions/:id', SessionController.getSession)
router.post('/sessions', SessionController.createSession)
router.put('/sessions/:id', SessionController.updateSession)
router.delete('/sessions/:id', SessionController.deleteSession)

export default router