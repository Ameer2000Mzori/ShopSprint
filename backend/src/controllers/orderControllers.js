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

export const getUserOrder = async (req, res) => {
  try {
    const userOrders = await Order.find({ author: req.user.id }).populate(
      'author'
    )
    res.status(200).json(userOrders)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export const addOrder = async (req, res) => {
  const {
    name,
    price,
    amount,
    category,
    company,
    freeShipping,
    color,
    id,
    total,
  } = req.body

  console.log(
    name,
    price,
    amount,
    category,
    company,
    freeShipping,
    color,
    id,
    total
  )

  try {
    // finding user by id
    const user = await User.findById(req.user.id)

    // Create a new order
    const newOrder = new Order({
      author: user.id,
      name,
      price,
      amount,
      category,
      company,
      freeShipping,
      color,
      id,
      total,
    })

    await newOrder.save()

    user.orderList.push(newOrder)

    //  update the user
    await user.save()

    res.status(200).json({
      message: 'Order created successfully',
      order: newOrder,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'An error occurred' })
  }
}
