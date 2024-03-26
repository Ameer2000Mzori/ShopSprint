import { User } from '../modules/userSchema.js'

export const getUsers = (req, res) => {
  User.find()
    .populate('orderList')
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

export const createUser = async (req, res) => {
  const { name, username, email, password } = req.body

  try {
    const user = await User.findOne({
      $or: [{ userName: username }, { email }],
    })

    if (user) {
      return res.status(400).json({
        message: 'User already exists',
      })
    }

    // Create a new user using the correct field names
    const newAccount = new User({
      Name: name,
      userName: username,
      email,
      password,
    })

    // Save the new user to the database
    await newAccount.save()

    console.log(newAccount)

    res.status(200).json({
      message: 'User created successfully',
      User: newAccount,
    })
  } catch (err) {
    console.error(err)

    res.status(500).json({
      message: 'Server failed',
      error: err.message, // Provide more specific error message
    })
  }
}
