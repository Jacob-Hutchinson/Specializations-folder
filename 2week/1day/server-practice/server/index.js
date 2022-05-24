const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const {getDB} = require('./controller')

app.get('/getDB', getDB)

app.listen(4567, () => console.log(`listening on port 4567`))