require('dotenv').config()
const express = require('express')
const db = require('./models')

const app = express()

app.use(express.json())

db.sequelize.sync()
.then(() => {
    console.log('database connected')
})
.catch(() => {
    console.log('an error occured: ' + error.message)
})


app.get('/', (req, res) => {
    res.json({
        message: 'welcome to backend'
    })
})

const port =process.env.PORT || 3000

app.listen(port, () => {
    console.log('server stating at : ' + port)
})