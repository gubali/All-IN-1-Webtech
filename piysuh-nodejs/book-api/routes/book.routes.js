const express = require('express');
const router = express.Router();
const controller = require('../controllers/book.controller')
router.get('/', controller.getAllBooks);
router.get('/book/:id', controller.getBooksById);
router.get('/author/:id/books', controller.getListOfBooksByAuthorId);
router.post('/', controller.addBooks);
router.delete('/:id', controller.deleteBook)
module.exports = router;