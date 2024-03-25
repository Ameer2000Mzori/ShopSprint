import { User } from '../modules/userSchema.js'

export const getUsers = (req, res) => {
  User.find()
    .populate('articles')
    .sort({
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

export const createUser = (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: 'Missing required fields in request body' })
  }

  console.log('Received data for creating user:', username, email, password)
}
