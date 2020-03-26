//Criação da tabela ONGs
//Para criar tem que executar npx knex migrate:latest
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  
};
//voltar atras da criação da tabela executar:npx knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
