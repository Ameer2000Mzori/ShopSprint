import express from 'express'
import { createUser } from '../controllers/userControllers.js'

const userRouter = express.Router()

Router.post('/createaccount', createUser)

export default userRouter
