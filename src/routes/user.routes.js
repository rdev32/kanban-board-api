import { Router } from 'express'
import * as UserController from '../controllers/user.controller'

const router = new Router()
router.post('/signup', UserController.signUp)
router.post('/signin', UserController.signIn)

export default router
