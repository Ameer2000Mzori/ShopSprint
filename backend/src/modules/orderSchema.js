import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  freeShipping: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})

const Order = mongoose.model('Order', orderSchema)

export { Order }
