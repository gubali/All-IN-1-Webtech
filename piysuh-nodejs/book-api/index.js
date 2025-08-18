require('dotenv/config');
const express = require('express');
const app = express();
const bookRouter = require('./routes/book.routes');
const authorRouter = require('./routes/author.routes')
const logger = require('./middleware/logger')
app.use(express.json());
app.use(logger);
app.use('/books', bookRouter);
app.use('/authors', authorRouter)
app.listen(8000, () => console.log('server ruinng on port 8000'))