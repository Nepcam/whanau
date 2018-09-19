const express = require('express') // step 2.

// server/routes/auth.js
const {userExists, createUser} = require('../db/users')

const router = express.Router() // step 2.

router.get('/register', register)

router.post('/register', register) // step 2.

function register (req, res) { // step 2.
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.username, req.body.password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

module.exports = router