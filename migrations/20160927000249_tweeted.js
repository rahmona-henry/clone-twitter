exports.up = function(knex, Promise) {
console.log('Create new Tweeted table with userID')

  return knex.schema.createTableIfNotExists('tweeted', function(table){
    table.increments('id');
    table.string('tweeted');
    table.string('email');
    table.string('userName');
    table.integer('userId')
    table.timestamps();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tweeted').then(function (){
    console.log('tweeted table was dropped')
  })
};
