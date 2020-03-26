const knex = require('knex');
const configDb = require('../../knexfile');

const connection = knex(configDb.development);
//Config develpment do arquivo knexfile.js


//exporta a conecção desse BD
module.exports = connection;