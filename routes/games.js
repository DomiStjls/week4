const gamesRouter = require('express').Router();

const {findAllGames, createGame, findGameById, updateGame, deleteGame} = require('../middlewares/games');
const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games');

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated);
gamesRouter.put(
    "/games/:id", // Слушаем запросы по эндпоинту  
      findGameById, // Шаг 1. Находим игру по id из запроса
      // Шаг 2. Проверки, если нужны
      updateGame, // Шаг 3. Обновляем запись с игрой
      sendGameUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
  );

gamesRouter.delete("/games/:id", deleteGame,sendGameDeleted);
module.exports = gamesRouter;