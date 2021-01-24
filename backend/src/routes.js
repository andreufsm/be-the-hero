const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// OngController.js
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// IncidentController.js
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete); 

// ProfileController.js
routes.get('/profile', ProfileController.index);

// SessionController.js
routes.post('/sessions', SessionController.create);

/* const { celebrate, Segments, Joi } = require('celebrate');

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    })
  }), OngController.create)

*/

module.exports = routes;