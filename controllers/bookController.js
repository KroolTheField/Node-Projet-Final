const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('genre');
    res.json(books);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('genre');
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.json({ msg: 'Book removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
