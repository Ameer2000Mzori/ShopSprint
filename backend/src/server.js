import express from 'express'
import productsRouter from './routes/route.js'
import userRouter from './routes/userRoutes.js'
import morgan from 'morgan'
import mongoConnect from './db/db.js'
import 'dotenv/config'

const app = express()
app.use(morgan('dev'))

app.use(productsRouter)
app.use(userRouter)

app.use(express.json())

const PORT = process.env.PORT || 4000
mongoConnect(() => {
  app.listen(PORT, (req, res) => {
    console.log(`server is running at port ${PORT}`)
  })
})
