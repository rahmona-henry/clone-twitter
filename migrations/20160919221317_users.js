
exports.up = function(knex, Promise) {
  console.log('Create Users table')

    return knex.schema.createTableIfNotExists('users', function(table){
      table.increment('id')
      table.string('email')
      table.string('password')
      table.string('userName')
      table.timeestamps()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function(){
    console.log('Users table was dropped')
  })

};
