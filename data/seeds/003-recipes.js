exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_id: 1, name: "bread", instructions: "flour + yeast + water" },
        {
          recipe_id: 2,
          name: "lemon chicken",
          instructions: "chicken + lemon + pepper"
        },
        {
          recipe_id: 3,
          name: "bowl of cereal",
          instructions: "cereal of your chosing + milk of your chosing"
        }
      ]);
    });
};
