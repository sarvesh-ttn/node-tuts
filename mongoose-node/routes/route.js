const Router = require('express').Router();
const item = require('../controller/controllers')

Router.get('/items', item.getAll)
Router.post('/items' , item.create)
Router.patch('/items/:id' , item.update);
Router.delete('/items/:id' , item.delete);

Router.use(item.errorHandler)
module.exports = Router;
