const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const multer = require('multer')
const db = require('./db/connection')
const LinkRouter = require('./routes/LinkRoute')
const MediaRouter = require('./routes/MediaRoute')
const TextRouter = require('./routes/TextRoute')
const UserRouter = require('./routes/UserRoutes')
const AllRouter = require('./routes/AllRoute')

// const fs = require('fs')
// const path = require('path')
// const upload = multer({ dest: 'uploads/' })
// require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3002

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())

//routes as middleware
app.use('/api', UserRouter)
app.use('/content', MediaRouter)
app.use('/content', TextRouter)
app.use('/content', LinkRouter)
app.use('/content', AllRouter)

app.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
})

db.on('error', console.error.bind(console, 'MongoDB connection error'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}⏰ `))
