const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {getPopMovie, genreMovie, getFood, addMovie, displayList, deleteMovie} = require('./controller')

app.get('/movie', getPopMovie)
app.post('/movie', genreMovie)
app.get('/food', getFood)
app.post('/list', addMovie)
app.get('/list', displayList)
app.delete('/list/:id', deleteMovie)


const {SERVER_PORT} = process.env  || 4004 

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))