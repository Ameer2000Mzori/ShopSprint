import express from 'express'
import {
  homePage,
  fetchData,
  getOneItem,
  filterItems,
} from '../controllers/controller.js'

const Router = express.Router()

Router.get('/', homePage)
Router.get('/products', fetchData)
Router.get('/products/:id', getOneItem)
Router.get('/products/filter', filterItems)

export default Router
