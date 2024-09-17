const express = require('express');
const router = express.Router();
const Author = require('./models/Author');
const Book = require('./models/Book');
const Publisher = require('./models/Publisher');

// CRUD for Author
router.post('/authors', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find().populate('books');
    res.send(authors);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/authors/:id', async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate('books');
    if (!author) return res.status(404).send();
    res.send(author);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/authors/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!author) return res.status(404).send();
    res.send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/authors/:id', async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).send();
    res.send(author);
  } catch (error) {
    res.status(500).send(error);
  }
});

// CRUD for Book
router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find().populate('author publishers');
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author publishers');
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

// CRUD for Publisher
router.post('/publishers', async (req, res) => {
  try {
    const publisher = new Publisher(req.body);
    await publisher.save();
    res.status(201).send(publisher);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/publishers', async (req, res) => {
  try {
    const publishers = await Publisher.find().populate('books');
    res.send(publishers);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/publishers/:id', async (req, res) => {
  try {
    const publisher = await Publisher.findById(req.params.id).populate('books');
    if (!publisher) return res.status(404).send();
    res.send(publisher);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/publishers/:id', async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!publisher) return res.status(404).send();
    res.send(publisher);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/publishers/:id', async (req, res) => {
  try {
    const publisher = await Publisher.findByIdAndDelete(req.params.id);
    if (!publisher) return res.status(404).send();
    res.send(publisher);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
