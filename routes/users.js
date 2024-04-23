
const usersRouter = require('express').Router();

const {findAllUsers, createUser, findUserById} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById} = require('../controllers/users');
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated);

module.exports = usersRouter;
