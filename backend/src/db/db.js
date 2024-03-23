import mongoose from 'mongoose'
import 'dotenv/config'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sprint-shop.bis4ngo.mongodb.net/` // or process.env.DB_LINK_2

const mongoConnect = (cb) => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB')
      cb()
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err))
}

export default mongoConnect
