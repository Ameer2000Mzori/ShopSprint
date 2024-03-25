import express from 'express'
import { createUser, getUsers } from '../controllers/userControllers.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.post('/createuser', createUser)

export default userRouter
