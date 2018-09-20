
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          user_name: 'cameron nepe',
          email_address: 'cameron.nepe@hotmail.com',
          comment: 'kia ora whanau'
        },
        
      ]);
    });
};
