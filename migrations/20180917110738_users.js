
//step 3. made the database
exports.up = (knex, Promise) => {
    return knex.schema.createTableIfNotExists('users', table => {
      table.increments('id').primary()
      table.string('username').unique()
      table.string('hash')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('users')
  }