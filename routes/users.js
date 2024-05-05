
const usersRouter = require('express').Router();

const {findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, hashPassword} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted} = require('../controllers/users');
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  sendUserCreated
); 

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmailAndPassword,
  updateUser,

  
  sendUserUpdated
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
module.exports = usersRouter;
