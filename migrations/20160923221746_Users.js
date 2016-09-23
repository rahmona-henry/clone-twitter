exports.up = function(knex, Promise) {
  console.log('Create Users table')

    return knex.schema.createTableIfNotExists('users', function(table){
      table.increments('id')
      table.string('email')
      table.string('hashed_password')
      table.string('userName')
      table.timestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function(){
    console.log('Users table was dropped')
  })

};
