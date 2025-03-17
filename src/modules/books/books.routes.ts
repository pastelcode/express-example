import { Router } from 'express'
import booksController from './books.controller'

const router = Router()

router
  .route('/books')
  .get(booksController.getAllBooks)
  .post(booksController.createBook)

router
  .route('/books/:id')
  .get(booksController.getBookById)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook)

export default router
