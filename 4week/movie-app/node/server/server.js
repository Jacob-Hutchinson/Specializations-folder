require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { allMovies, getPopMovie, getByGenre } = require('./controller.js')



const app = express()

app.use(express.json())
app.use(cors())


const baseURL = process.env.BASEURL

app.get('/movies', getPopMovie)
app.post('/genre', getByGenre)



const port = process.env.PORT || 4004

app.listen(port, () => console.log(`listening on port ${port}`))