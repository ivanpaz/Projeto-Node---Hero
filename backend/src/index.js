const express = require('express'); //Importando o Express
const routes = require('./routes'); //Importa o o routes. Tem que usar ./ para não ser confundido com pacote
const cors = require('cors');//Segurança para quem irá usar a aplicação

const app = express(); //Armazenando numa variavel

app.use(cors()); //Determina quem pode acessar meu backend

app.use(express.json());//Estou falando pro Express converter no body, o json em js

app.use(routes);
/**
 * Métodos HTTP
 * 
 * GET: Busca/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: lterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * 
 * 
 * 
 * Tipos de Parâmetros
 * 
 * Query Params: Parametros nomeados enviados na rota (dentro da URL) após o "?" (Filtro e paginação)
 *      app.get('/users?nameDiego'...
 * 
 * Route Params:Parâmentros utilizaos para identificar recursos
 *      app.get('/users'
 * 
 * Request Body: Corpo da requisição, tulizao para criar ou alterar recursos
 * 
 * 
 * Tipos de Banco de Dados
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server. Formato utilizado para se comunicar com o BD
 * NoSQL: MongoDB, CouchDB, etc. 
 * 
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */









app.listen(3333); //Fazeno ele ser acessivel para a porta 3333. localhost:3333