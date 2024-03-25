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
  const { username, email, password } = req.body

  try {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    })
    if (user)
      return res.status(400).json({
        message: 'user already exist',
      })
    // let new_pwd = await hashPassword(password)
    newAccount = new User({
      username,
      email,
      password: password,
    })
    await newAccount.save()
    console.log(newAccount)
    // const token = jwt.sign({ id: newAccount._id }, process.env.SECRET, {
    //   expiresIn: 3600,
    // }) // 1 hour
    res.status(200).json({
      message: 'user created successfully',
      User: newAccount,
      // token,
    })
  } catch {
    // if (newAccount?._id) await newAccount.deleteOne({ _id: newAccount._id })
    res.status(500).json({
      message: 'Server failed',
    })
  }
}
