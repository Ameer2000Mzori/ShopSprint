import express from 'express'
import {
  createUser,
  getUsers,
  getUser,
  userLogin,
} from '../controllers/userControllers.js'
import { guard } from '../utils/token.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.get('/user/:id', guard, getUser)
userRouter.post('/login', userLogin)
userRouter.post('/register', createUser)

export default userRouter
