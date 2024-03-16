import express from 'express'

const Router = express.Router()
const app = express()
app.use(express.json())
app.use(Router)

Router.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
