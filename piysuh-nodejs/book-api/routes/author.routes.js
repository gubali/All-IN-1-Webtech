const express = require('express');
const authorTable = require('../models/author.model');
const db = require('../db');
const { eq } = require('drizzle-orm');
const { error } = require('console');
const router = express.Router();
router.get('/', async (req, res) => {
    const authors = await db.select().from(authorTable);
    console.log(authors);
    return res.json(authors);
});

router.get('/:id', async (req, res) => {
    debugger;
    const id = req.params.id;
    const [author] = await db.select().from(authorTable)
        .where(table => eq(table.id, id)).limit(1);
    if (!author) {
        return res.status(404).json({ error: `Author with id ${id} does not exist!` });
    }
    return res.json(author);
});

router.post("/", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const [result] = await db.insert(authorTable).values({
        firstName, lastName, email
    }).returning({ id: authorTable.id });


    return res.status(201).json({ message: 'Author created successfully with', id: `${result.id}` })
});


module.exports = router;
