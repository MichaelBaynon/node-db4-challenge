exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments('recipe_id');

      tbl
        .string("name", 255)
        .notNullable()
        .unique();

      tbl.string("instructions", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id") // references 
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl.unique(["recipe_id"]);

      tbl.string("amount", 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
