import express from 'express'
import productsRouter from './routes/productsRouter.js'
import userRouter from './routes/userRoutes.js'
import morgan from 'morgan'
import mongoConnect from './db/db.js'
import 'dotenv/config'

const app = express()
app.use(morgan('dev'))

// our routers
app.use(express.json())
app.use(userRouter)
app.use(productsRouter)

const PORT = process.env.PORT || 4000
mongoConnect(() => {
  app.listen(PORT, (req, res) => {
    console.log(`server is running at port ${PORT}`)
  })
})
