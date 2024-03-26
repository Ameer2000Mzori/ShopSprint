import { User } from '../modules/userSchema.js'
import { Order } from '../modules/orderSchema.js'

export const getOrders = (req, res) => {
  Order.find()
    .populate('author')
    .sort({ createdAt: -1 })
    .then((result) => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: 'An error occurred' })
    })
}

export const getUserOrder = (req, res) => {
  const { usrId } = req.body
}

export const addOrder = () => {
  console.log('addOrder')
}
