import express from 'express'
import {
  homePage,
  fetchData,
  getOneItem,
  filterItems,
} from '../controllers/productControllers.js'

const productsRouter = express.Router()

// products routes
Router.get('/', homePage)
Router.get('/products', fetchData)

Router.get('/products/filter/items', filterItems)

// product endpoints routes
Router.get('/:id', getOneItem)

export default productsRouter
