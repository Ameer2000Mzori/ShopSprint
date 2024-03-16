import express from 'express'
import { homePage } from '../controllers/controller.js'

const Router = express.Router()

Router.get('/', homePage)

export default Router
