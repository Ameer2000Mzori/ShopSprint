import express from 'express'
import {
  homePage,
  fetchData,
  getOneItem,
  filterItems,
} from '../controllers/productControllers.js'

const productsRouter = express.Router()

// products routes
productsRouter.get('/', homePage)
productsRouter.get('/products', fetchData)
productsRouter.get('/products/filter/items', filterItems)

// product endpoints routes
productsRouter.get('/:id', getOneItem)

export default productsRouter
