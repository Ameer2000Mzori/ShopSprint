import express from 'express'
import Router from './routes/route.js'
import morgan from 'morgan'
import 'dotenv/config'

const app = express()
app.use(morgan('dev'))

app.use(Router)

app.use(express.json())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
