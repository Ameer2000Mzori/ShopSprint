import express from 'express'
import { homePage, fetchData } from '../controllers/controller.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/products', fetchData)

export default Router
