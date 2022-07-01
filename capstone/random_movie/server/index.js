const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {getPopMovie, genreMovie, getFood, deleteMovie, addUser, checkUser, addMovie2, displayList2, categoryFood, countryFood} = require('./controller')

app.get('/movie', getPopMovie)
app.post('/movie', genreMovie)
app.get('/food', getFood)
app.post('/food', categoryFood)
app.post('/food2', countryFood)
app.post('/list', addMovie2)
app.post('/displayList', displayList2)
app.delete('/list/:id', deleteMovie)
app.post('/signin', addUser)
app.post('/login', checkUser)


const {SERVER_PORT} = process.env  || 4004 

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))