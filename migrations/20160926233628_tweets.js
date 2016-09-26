exports.up = function(knex, Promise) {
console.log('Create Table')

  return knex.schema.createTableIfNotExists('tweets', function(table){
    table.increments('id');
    table.string('tweeted');
    table.string('email');
    table.string('userName');
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tweets').then(function (){
    console.log('tweets table was dropped')
  })
};
