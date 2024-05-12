import { User } from '../modules/userSchema.js'
import jwt from 'jsonwebtoken'
import { hashPassword, checkPwd } from '../utils/hashing.js'
import 'dotenv/config'

export const checkUser = (req, res) => {
  const { id } = req.body
  console.log('this is id backend', id)
  const user = User.findById(id)

  console.log('user found ', user)
}

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
      res.status(500).json({
        error: 'An error occurred',
      })
    })
}

export const getUser = (req, res) => {
  User.findById(req.params.id)
    .populate('orderList')
    .then((result) => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        error: 'An error occurred',
      })
    })
}

export const createUser = async (req, res) => {
  const { name, username, email, password } = req.body

  console.log('info got from frontend ', name, username, email, password)

  let newAccount // Define newAccount using let for better error handling

  try {
    // Check if user with the same username or email already exists
    const user = await User.findOne({
      $or: [
        {
          userName: username,
        },
        {
          email,
        },
      ],
    })

    if (user) {
      return res.status(400).json({
        message: 'User already exists',
      })
    }

    // Hash the password
    const hashedPassword = await hashPassword(password)

    // Create a new user with hashed password
    newAccount = new User({
      Name: name,
      userName: username,
      email,
      password: hashedPassword,
    })

    // Save the new user to the database
    await newAccount.save()

    // Generate JWT token for the new user
    const token = jwt.sign(
      {
        id: newAccount._id,
      },
      process.env.SECRET,
      {
        expiresIn: 15, // 1 hour
      }
    )

    console.log('User created successfully:', newAccount)

    // Respond with success message and token
    res.status(200).json({
      message: 'User created successfully',
      User: newAccount,
      token,
    })

    console.log('Token:', token)
  } catch (error) {
    console.error('Error creating user:', error)

    if (newAccount?._id)
      await newAccount.deleteOne({
        _id: newAccount._id,
      })

    // Respond with error message
    res.status(500).json({
      message: 'Server failed',
    })
  }
}

// user login

export const userLogin = async (req, res) => {
  const { email, password } = req.body
  console.log('User login:', email, password)

  const user = await User.findOne({ email }).populate('orderList')
  console.log(user)
  if (user == null || !(await checkPwd(password, user.password)))
    return res.status(400).json({
      message: 'Username or Password is wrong ',
    })
  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 15,
  })
  return res.status(200).json({
    message: 'logged in successfully ',
    data: user,
    token,
  })
}
