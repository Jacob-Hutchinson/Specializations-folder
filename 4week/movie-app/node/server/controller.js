require('dotenv').config()
const {default:axios} = require('axios')

const {BASEURL, KEY} = process.env


module.exports= {
    allMovies: (req, res) => {
        const random = () => {
            const randomNum = Math.random()* 700000 | 0
            axios
            .get(`${BASEURL}movie/${randomNum}?api_key=${KEY}&language=en-US`)
            .then(dbres => {
                console.log(dbres.data)
                if(dbres.data.vote_average < 6.5 || dbres.data.adult || dbres.data.original_language !== 'en'){
                    random()
                    return
                }
                res.status(200).send(dbres.data)
            })
            .catch((err) => {
                random()
            })
        }
        random()
    },
    getPopMovie: (req, res) => {
        const path = `${BASEURL}movie/top_rated?api_key=${KEY}&language=en-US&page=${(Math.random() * 100 | 0) +1}`
        const idArr = []
        axios
        .get(path)
        .then(dbres => {
            for(let i = 0; i < dbres.data.results.length; i++){
                idArr.push(dbres.data.results[i].id)
                }
                const randomID = Math.random() * idArr.length | 0
            axios
            .all([
                axios.get(`${BASEURL}movie/${idArr[randomID]}?api_key=${KEY}&language=en-US`),
                axios.get(`${BASEURL}movie/${idArr[randomID]}/watch/providers?api_key=${KEY}&language=en-US`),
            ])
            .then(axios.spread((dbres1, dbres2) => {
                const dbObj = {
                    ...dbres1.data,
                    ...dbres2.data
                }
                res.status(200).send(dbObj)
            }))
            .catch(err => console.log(err))

            // .get(`${BASEURL}movie/${idArr[randomID]}?api_key=${KEY}&language=en-US`)
            // .then(dbres2 => {
            //     res.status(200).send(dbres2.data)
            // })
            })
            .catch(err => console.log(err))
        },
        getByGenre: (req, res) => {
            const genre = req.body.genre
            console.log(genre)
            const findGenre = () => {
                console.log('hit findG')
            const idArr = []
            axios
            .get(`${BASEURL}movie/top_rated?api_key=${KEY}&language=en-US&page=${(Math.random() * 100 | 0) +1}&with_genres=${genre}`)
            .then(dbres => {
                // loops over the page of movies obj and adds the movie id to an array
                for(let i = 0; i < dbres.data.results.length; i++){
                    idArr.push(dbres.data.results[i].id)
                    }
                    if(idArr.length === 0){
                        findGenre()
                        return
                    }
                    const randomID = Math.random() * idArr.length | 0
                axios
                .all([
                    axios.get(`${BASEURL}movie/${idArr[randomID]}?api_key=${KEY}&language=en-US`),
                    axios.get(`${BASEURL}movie/${idArr[randomID]}/watch/providers?api_key=${KEY}&language=en-US`),
                ])
                .then(axios.spread((dbres1, dbres2) => {
                    const dbObj = {
                        ...dbres1.data,
                        ...dbres2.data
                    }
                    res.status(200).send(dbObj)
                }))
                .catch(err => console.log(err))
                })
            .catch(err => console.log(err))
            }
            findGenre()
        },
    }