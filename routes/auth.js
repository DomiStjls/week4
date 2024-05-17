const authRouter = require("express").Router();
const { login, sendIndex, sendDashboard } = require("../controllers/auth.js");

authRouter.post("/auth/login", login);

module.exports = authRouter;