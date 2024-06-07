import express from 'express'
import {
  createUser,
  getUsers,
  getUser,
  userLogin,
  verifyAccount,
} from '../controllers/userControllers.js'
import { guard } from '../utils/token.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.post('/login', userLogin)
userRouter.post('/register', createUser)
userRouter.post('/verifyAccount', verifyAccount)
userRouter.get('/user/:id', guard, getUser)
export default userRouter
