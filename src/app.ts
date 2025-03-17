import express from 'express'
import morgan from 'morgan'
import booksRoutes from './modules/books/books.routes'

const app = express()

// Settings
app.set('port', 3000)

// Middlewares
app.use(morgan('dev')) // Middleware for HTTP requests logging
app.use(express.json())

// Routes
app.get('/', (req, res) => res.redirect('/books'))
app.use(booksRoutes)

export default app
