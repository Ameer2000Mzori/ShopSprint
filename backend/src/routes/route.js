import express from 'express'
import {
  homePage,
  fetchData,
  getOneItem,
  filterItems,
  usersList,
} from '../controllers/controller.js'

const Router = express.Router()

// products routes
Router.get('/', homePage)
Router.get('/products', fetchData)

Router.get('/products/filter/items', filterItems)

// users routes
Router.get('/userslist', usersList)

export default Router

// product endpoints routes
Router.get('/:id', getOneItem)
