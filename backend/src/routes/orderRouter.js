import express from 'express'
import { guard } from '../utils/token.js'
import {
  getOrders,
  getUserOrder,
  addOrder,
} from '../controllers/orderControllers.js'

const orderRouter = express.Router()

orderRouter.get('/orders', getOrders)
orderRouter.post('/addorder', guard, addOrder)

orderRouter.get('/userorder/:id', getUserOrder)
