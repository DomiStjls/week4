
const usersRouter = require('express').Router();

const {findAllUsers, createUser, findUserById, updateUser, deleteUser} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted} = require('../controllers/users');
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated);
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту  
      findUserById, // Шаг 1. НаNavig игру по id из запроса
      // Шаг 2. Проверки, если нужны
      updateUser, // Шаг 3. Обновляем запись с игрой
      sendUserUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
  );
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
module.exports = usersRouter;
