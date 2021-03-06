
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table => {
    table.increments(); //unique ID
    table.string('name').notNullable(); // a name
    table.string('description').notNullable(); // description of what needs to be done
    table.boolean('completed').defaultTo(false); // flag that indicated if the project is complete or not, 0 or 1
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
