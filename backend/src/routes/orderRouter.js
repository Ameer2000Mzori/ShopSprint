import express from 'express'
import {
  getOrders,
  getUserOrder,
  addOrder,
} from '../controllers/orderControllers.js'

const orderRouter = express.Router()

orderRouter.get('/orders', getOrders)
orderRouter.post('/addorder', addOrder)

orderRouter.get('/userorder/:id', getUserOrder)
