const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {getPopMovie, genreMovie} = require('./controller')

app.get('/movie', getPopMovie)
app.post('/movie', genreMovie)


const port = process.env.PORT || 4004

app.listen(port, () => console.log(`listening on port ${port}`))