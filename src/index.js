const express = require('express');
const router = express.Router();
const usersRouter = require('./components/users/users.router');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Kanban APP API' });
});

function registerRoutes(app) {
  app.use('/', router);
  app.use('/users', usersRouter);
}

module.exports = registerRoutes;
