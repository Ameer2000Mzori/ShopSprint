import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  userName: { type: String, required: true },
  Name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orderList: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
})

const User = mongoose.model('User', userSchema)

export default User
