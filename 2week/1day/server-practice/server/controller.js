const DB = require('./db.json')

module.exports = {
    getDB: (req, res) => {
        res.status(200).send(DB)
    }
}