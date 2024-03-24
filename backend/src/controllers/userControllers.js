// import { User } from '../modules/userSchema.js'

export const createUser = (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: 'Missing required fields in request body' })
  }

  console.log('Received data for creating user:', username, email, password)
}
