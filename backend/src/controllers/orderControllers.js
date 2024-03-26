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
  const { id, name, price } = req.body
  console.log(req.user)

  try {
    // finding user by id
    const user = await User.findById(req.user.id)

    // Create a new article
    const newArticle = new Article({
      author: user.id,
      title,
      text,
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
