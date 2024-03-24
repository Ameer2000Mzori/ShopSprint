import express from 'express'
import { createUser } from '../controllers/userControllers.js'

const userRouter = express.Router()

userRouter.post('/createuser', createUser)

export default userRouter
