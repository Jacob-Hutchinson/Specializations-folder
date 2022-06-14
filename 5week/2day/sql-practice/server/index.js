const express = require('express')
const cors = require('cors')
const PORT = 4004

const app = express()

app.use(express.json())
app.use(cors())

const {getStuff} = require('./controller')

app.get('/stuff', getStuff)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))