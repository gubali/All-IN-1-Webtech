const booksTable = require('../models/book.model');
const authorTable = require('../models/author.model')
const db = require('../db');
const { eq, ilike, sql } = require('drizzle-orm');
exports.getAllBooks = async function (req, res) {
    const search = req.query.search;
    if (search) {
        const books = await db.select().from(booksTable)
            .where(sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`);
        console.log(books);
        return res.json(books);
    }
    const books = await db.select().from(booksTable);
    return res.json(books);
}

exports.getBooksById = async function (req, res) {
    const id = req.params.id;
    const [book] = await db.select().from(booksTable)
        .where(table => eq(table.id, id)).leftJoin(
            authorTable, eq(booksTable.authorId, authorTable.id)
        ).limit(1)
    if (!book) return res.status(404).json({ error: `Book with ${id} does not exist!` });
    return res.json(book);
}

exports.addBooks = async function (req, res) {
    const { title, description, authorId } = req.body;
    console.log(req.body);
    if (!title || title === '')
        return res.status(400).json({ message: 'title is required' })
    const [result] = await db.insert(booksTable).values({
        title, description, authorId
    }).returning({
        id: booksTable.id
    });
    return res.status(201).json({ message: `Books created with: id: ${result.id} ` })
}
exports.deleteBook = async function (req, res) {
    const id = req.params.id;
    await db.delete(booksTable).where(eq(booksTable.id, id));
    return res.status(200).json({ message: `books deleted with id: ${id}` })
}

exports.getListOfBooksByAuthorId = async function (req, res) {
    const authorId = req.params.id;
    console.log(authorId);
    try {
        const books = await db.select().from(booksTable).where(table => eq(table.authorId, authorId))
            .leftJoin(
                authorTable, eq(booksTable.authorId, authorTable.id)
            );
        const filter = books.map(({ authorId, ...rest }) => rest);
        console.log(books);
        if (filter.length == 0) return res.status(404).json({ error: `Author with ${authorId} does not exist!!!!` });
        const onlyBooks = filter.map(elem => elem.books);
        const onlyAuthor = filter[0].authors;
        return res.json({
            onlyBooks,
            onlyAuthor
        });
    }
    catch (err) {
        console.log("error fetchng ecords", err);
        return res.status(505).json({ error: 'failed to retrieve books' })
    }
};
