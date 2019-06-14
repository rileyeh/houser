require('dotenv/config')
const express = require('express')
const massive = require('massive')

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
})

const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/houses', ctrl.readHouses)
app.post('/addhouse', ctrl.addHouse)
app.delete('/houses/:id', ctrl.deleteHouse)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))