const users = require("../models/user");
const bcrypt = require("bcryptjs");


const hashPassword = async (req, res, next) => {
  try {
    // Создаём случайную строку длиной в десять символов
    const salt = await bcrypt.genSalt(10);
    // Хешируем пароль
    const hash = await bcrypt.hash(req.body.password, salt);
    // Полученный в запросе пароль подменяем на хеш
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
}; 
const findAllUsers = async (req, res, next) => {
  console.log("GET /api/users");
  req.usersArray = await users.find({}, { password: 0 });
  next();
};
const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating user");
  }
}
const findUserById = async (req, res, next) => {
  console.log("GET /api/users/:id");
  try {
    req.user = await users.findById(req.params.id, { password: 0 });
    next();
  } catch (error) {
    res.status(404).send("User not found");
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error updating user" });
  }
}

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting user" });
  }
}

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({ message: "Введите имя и email" });
  } else {
    next();
  }
};

const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.usersArray.find((user) => {
    return req.body.email === user.email;
  });
  if (isInArray) {
    res.status(400).send({ message: "Пользователь с таким email уже существует" });
  } else {
    next();
  }
};

const checkIfUsersAreSafe = async (req, res, next) => {
  if (!req.body.users) {
    next();
    return;
  }
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res
      .status(400)
      .send({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" });
  }
};
module.exports = {findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, checkIfUsersAreSafe,checkEmptyNameAndEmailAndPassword, hashPassword};