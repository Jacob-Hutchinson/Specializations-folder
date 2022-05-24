const DB = require('./db.json')

module.exports = {
    getDB: (req, res) => {
        console.log('hit the server')
        res.status(200).send(DB)
    }
}