import express from 'express'
import { homePage, fetchData, getOneItem } from '../controllers/controller.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/products', fetchData)
Router.get('/products/:id', getOneItem)

export default Router
