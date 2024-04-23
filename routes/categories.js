const categoriesRouter = require('express').Router();

const {findAllCategories, createCategory, findCategoryById} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryById} = require('../controllers/categories');
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', createCategory, sendCategoryCreated);


module.exports = categoriesRouter;
