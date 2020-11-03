const { response } = require('express');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express()

app.use(cors())
app.use(express.json());
app.use(routes);


/**
 * Tipos de parâmetro
 * 
 * Query: Params nomeados na rota enviados após "?" (filtros, 
 * paginação)
 * 
 * Route parms: parâmetros utilizados para identificar recursos
 * 
 * Request body: utilizado para criar/alterar recursos
 * 
 */


 /**
  * 3 formas de comunicação com o banco de dados
  * 
  * 
  * Driver (pacote do banco de dados): Select * from users
  * 
  * Query Builder: table('users').select('*').where()
  * 
  * 
  * 
  */

app.listen(3333);