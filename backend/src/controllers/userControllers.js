import { User } from '../modules/userSchema.js'
import jwt from 'jsonwebtoken'
import { hashPassword, checkPwd } from '../utils/hashing.js'
import 'dotenv/config'
import generateVerificationToken from '../utils/generateVerificationToken.js'
import { sendVerificationEmail } from '../utils/sendVerificationEmail.js'

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

  const VerificationToken = generateVerificationToken()
  const tokenExpiry = Date.now() + 3600000 // Token expires in 1 hour

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
      isVerified: false,
      verificationToken: VerificationToken,
      tokenExpiry: tokenExpiry,
    })

    // Save the new user to the database
    await newAccount.save()

    sendVerificationEmail(name, email, VerificationToken)

    // Generate JWT token for the new user
    const token = jwt.sign(
      {
        id: newAccount._id,
      },
      process.env.SECRET,
      {
        expiresIn: 3600, // 1 hour
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
    expiresIn: 3600,
  })
  return res.status(200).json({
    message: 'logged in successfully ',
    data: user,
    token,
  })
}

export const verifyAccount = async (req, res) => {
  const { verifyToken } = req.body

  console.log('Token:', verifyToken)
  try {
    // Find the user by the verification token and ensure it hasn't expired
    const user = await User.findOne({
      verificationToken: verifyToken,
      tokenExpiry: { $gt: Date.now() },
    })

    if (!user) {
      return res.status(400).send('Invalid or expired token.')
    }

    if (user) {
      user.isVerified = true
      user.verificationToken = undefined
      user.tokenExpiry = undefined
      await user.save()

      res.status(200).send({
        message: 'Account verified successfully',
        user,
      })

      VerificationConfirm()
    }
    // Verify the user's email and clear the token fields
  } catch (error) {
    console.error('Error verifying email:', error)
    res.status(500).send({
      message: 'Internal Server Error',
    })
  }
}
