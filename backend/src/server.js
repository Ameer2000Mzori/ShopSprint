import express from 'express'

const app = express()
app.use(express.json())
const Router = express.Router()
app.use(Router)

Router.get('/', (req, res) => {
  res.send('Hello World')
})
