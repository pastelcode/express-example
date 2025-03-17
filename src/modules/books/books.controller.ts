import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import { Book, BookDto } from './books.model'

let books: Book[] = []

const getAllBooks = (req: Request, res: Response): void => {
  res.status(200).json(books)
}

const getBookById = (req: Request, res: Response): void => {
  const { id } = req.params
  const book = books.find((book) => book.id === id)
  if (book) {
    res.status(200).json(book)
  } else {
    res.status(404).json({ message: `Book with id '${id}' not found` })
  }
}

const createBook = (req: Request, res: Response): void => {
  const { title, author, genre }: BookDto = req.body
  if (!title || !author || !genre) {
    res
      .status(400)
      .json({ message: 'Send required data: title, author and genre' })
    return
  }
  const book: Book = { id: uuid(), title: title, author: author, genre: genre }
  books = [...books, book]
  res.status(201).json(book)
}

const updateBook = (req: Request, res: Response): void => {
  const { id } = req.params
  const {
    title,
    author,
    genre,
  }: {
    title: string | undefined
    author: string | undefined
    genre: string | undefined
  } = req.body
  const book = books.find((book) => book.id === id)
  if (!book) {
    res.status(404).json({ message: `Book with id '${id}' not found` })
    return
  }
  if (!title && !author && !genre) {
    res.status(400).json({
      message: 'Send at least one property to update: title, author or genre',
    })
    return
  }
  book.title = title ?? book.title
  book.author = author ?? book.author
  book.genre = genre ?? book.genre
  res.status(200).json(book)
}

const deleteBook = (req: Request, res: Response): void => {
  const { id } = req.params
  books = books.filter((book) => book.id !== id)
  res.status(200).send()
}

const booksController = {
  getAllBooks: getAllBooks,
  getBookById: getBookById,
  createBook: createBook,
  updateBook: updateBook,
  deleteBook: deleteBook,
}

export default booksController
