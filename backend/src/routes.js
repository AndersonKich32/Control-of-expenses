const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const ContaLuzController = require('./controllers/ContaLuzController');
const ContaAguaController = require('./controllers/ContaAguaController');

const ProfileController = require('./controllers/ProfileController');
const SessaoController = require('./controllers/SessaoController');

const ContaLuzService = require('./services/ContaLuzService')

const routes = express.Router();

routes.get('/profile', ProfileController.index);

routes.post('/sessao', SessaoController.create);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);
  
routes.post('/contas/luz', ContaLuzController.create);
routes.get('/contas/luz', ContaLuzController.index);
routes.delete('/contas/luz/:id', ContaLuzController.delete);

routes.post('/contas/agua', ContaAguaController.create);
routes.get('/contas/agua', ContaAguaController.index);
routes.delete('/contas/agua/:id', ContaAguaController.delete);
   

routes.get('/contas/luz/service', ContaLuzService.soma);


module.exports = routes;