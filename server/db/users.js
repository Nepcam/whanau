// step 5.
// server/db/users.js
const connection = require('./connection')

//let knex = require('knex')
let config = require('../../knexfile').development
let conn = require ('knex')(config)

module.exports = {
  createUser, // step 5.
  userExists
}

function createUser (username, password, db = connection) {
  const db = conn 
  return db('users')
    .insert({username, hash: password})
}

function userExists (username, db = connection) {
  const db = conn 
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}