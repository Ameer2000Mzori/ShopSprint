import express from 'express'
import Router from './routes/route.js'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.use(Router)

app.use(express.json())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
