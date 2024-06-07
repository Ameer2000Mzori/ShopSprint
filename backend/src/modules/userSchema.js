import mongoose, { Schema } from 'mongoose'
import { Order } from './orderSchema.js'

const userSchema = new Schema({
  userName: { type: String, required: true },
  Name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orderList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],

  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  tokenExpiry: Date,
})

userSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Order.deleteMany({ author: doc._id })
  }
})

const User = mongoose.model('User', userSchema)

export { User }
