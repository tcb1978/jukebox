//	DEPENDENCIES
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
const album_controller = require('./controllers/album_controller')

//EXPRESS
const app = express()

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch((error) => console.error())

app.use(bodyParser.json())
app.use(cors())

//ENDPOINTS
const albumsURL = "/api/albums"
app.post(albumsURL, album_controller.create_album)
app.get(albumsURL, album_controller.getAll)
app.get(`${albumsURL}/:id`, album_controller.getOne)
app.put(`${albumsURL}/:id`, album_controller.update)
app.delete(`${albumsURL}/:id`, album_controller.delete)

//START SERVER
const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))
