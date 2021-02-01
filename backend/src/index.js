const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);




/**
 * Métodos HTTP:
 * GET: buscar informação do back-end
 * POST: criar informação no back-end
 * PUT: alterar informação no back-end
 * DELETE: apagar uma informação no back-end
 */

/**
 * Tipos de parâmetro
 * Query: Params nomeados na rota enviados após "?" (filtros, * paginação) ex. localhost?nome=exemplo
 * Route parms: parâmetros utilizados para identificar recursos ex. localhost/id/1 (não posso enviar além do que se espera)
 * Request body: utilizado para criar/alterar recursos 
 */

 /**
  * SQL: MySQL, SQLite, PostgrSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, Couch, etc.
  * 
  * 3 formas de comunicação com o banco de dados
  * Driver (pacote do banco de dados): SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */