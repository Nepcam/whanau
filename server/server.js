const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
//const apiRoutes = require('./routes/api')
const passport = require('passport')
const authRoutes = require('./routes/auth')
const server = express()

server.use(bodyParser.json())
server.use(express.json()) //step 1.
server.use(passport.initialize())
//server.use(express.static(path.join(__dirname, '../public')))
server.use(express.static(path.join(__dirname, './projects/index.html')))

// routes
//server.use('/api/v1/', apiRoutes)
server.use('/api/v1/auth', authRoutes)

module.exports = server
