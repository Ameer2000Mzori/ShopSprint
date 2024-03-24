import express from 'express'
import {
  homePage,
  fetchData,
  getOneItem,
  filterItems,
} from '../controllers/productControllers.js'

const Router = express.Router()

// products routes
Router.get('/', homePage)
Router.get('/products', fetchData)

Router.get('/products/filter/items', filterItems)

export default Router

// product endpoints routes
Router.get('/:id', getOneItem)
