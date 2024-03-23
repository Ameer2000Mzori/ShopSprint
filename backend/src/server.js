import express from 'express'
import Router from './routes/route.js'
import morgan from 'morgan'
import mongoConnect from './db/db.js'
import 'dotenv/config'

const app = express()
app.use(morgan('dev'))

app.use(Router)

app.use(express.json())

const PORT = process.env.PORT || 4000
mongoConnect(() => {
  app.listen(PORT, (req, res) => {
    console.log(`server is running at port ${PORT}`)
  })
})
