import express from 'express'
import {
  createUser,
  getUsers,
  userLogin,
} from '../controllers/userControllers.js'

const userRouter = express.Router()

userRouter.get('/users', getUsers)
userRouter.post('/login', userLogin)
userRouter.post('/createuser', createUser)

export default userRouter
