# Pindie — backend

Учебный бэкенд каталога игр на Express и MongoDB. В репозитории находятся API для пользователей, игр и категорий, а также статические страницы и экспорт данных.

## Запуск

Установите Node.js и запустите MongoDB локально. Приложение подключается к `mongodb://localhost:27017/pindie` и слушает порт 3001.

```bash
git clone https://github.com/DomiStjls/week4.git
cd week4
npm install
npm run dev
```

При необходимости данные находятся в `compass-export/`; автоматический импорт при запуске не указан.

## Структура

- `app.js` — запуск сервера.
- `routes/`, `controllers/`, `models/` и `middlewares/` — API и его обработчики.
- `database/` — подключение к MongoDB.
- `public/` — статические страницы.
- `compass-export/` — экспорт коллекций.

Связанный фронтенд: [pindie](https://github.com/DomiStjls/pindie). Ранее были указаны [бэкенд](https://domistjls.nomoredomainswork.ru/) и [фронтенд](http://mypindie.nomoredomainswork.ru/); их текущая доступность не проверена.
