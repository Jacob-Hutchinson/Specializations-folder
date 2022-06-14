const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://mhjesahdlzdmqq:9a86a5481d1c3e6f3c04f91a22b3da8cb649fb736364a7f746dec4511467b424@ec2-52-44-13-158.compute-1.amazonaws.com:5432/d8ki62i40o755u', {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

module.exports = {
    getStuff: (req, res) => {
        console.log('hit server')
        sequelize.query(`
        select * from test
        `)
        .then(dbres => {
            res.status(200).send(dbres[0])
        })
    }
}