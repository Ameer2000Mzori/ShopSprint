import express from 'express'
import {
  createUser,
  getUsers,
  getUser,
  userLogin,
  checkUser,
} from '../controllers/userControllers.js'
import { guard } from '../utils/token.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.get('/user/:id', guard, getUser)
userRouter.post('/login', userLogin)
userRouter.post('/register', createUser)
userRouter.get('/checkuser', guard, checkUser)

export default userRouter
