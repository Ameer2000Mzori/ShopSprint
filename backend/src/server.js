import express from 'express'
import Router from './routes/route.js'
const app = express()
app.use(express.json())
app.use(Router)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
