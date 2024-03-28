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

export const getUserOrder = async (req, res) => {}

export const addOrder = async (req, res) => {
  const { , name, price } = req.body
  console.log(req.user)

  try {
    // finding user by id
    const user = await User.findById(req.user.id)

    // Create a new article
    const newArticle = new Article({
      author: user.id,
      id,
      name,
      price,
      amount,
      category,
      company,
      freeShipping,
      color,
      total,
    })

    // Save the new article
    await newArticle.save()

    // Push the newly created article to the user's articles array
    user.articles.push(newArticle)

    //  update the user
    await user.save()

    res.status(200).json({
      message: 'Article created successfully',
      article: newArticle,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'An error occurred' })
  }
}

// author: {
//   type: Schema.Types.ObjectId,
//   ref: 'User',
//   required: true,
// },
// id: {
//   type: Number,
//   required: true,
// },
// name: {
//   type: String,
//   required: true,
// },
// price: {
//   type: Number,
//   required: true,
// },
// amount: {
//   type: Number,
//   required: true,
// },
// category: {
//   type: String,
//   required: true,
// },
// company: {
//   type: String,
//   required: true,
// },
// freeShipping: {
//   type: Number,
//   required: true,
// },
// color: {
//   type: String,
//   required: true,
// },
// total: {
//   type: Number,
//   required: true,
// },
// })
