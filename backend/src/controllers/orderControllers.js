import { User } from '../modules/userSchema.js'
import { Order } from '../modules/orderSchema.js'

export const getOrders = () => {
  Order.find({
    createdAt: -1,
  })
    .then((result) => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: 'An error occurred' })
    })
}

export const getUserOrder = () => {}

export const addOrder = () => {
  console.log('addOrder')
}
