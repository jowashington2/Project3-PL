const NonFictionBook = require('../models/NonFictionBook');

exports.createNonFictionBook = async (req, res) => {
  try {
    const newBook = new NonFictionBook(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating non-fiction book', error });
  }
};

exports.listNonFictionBooks = async (req, res) => {
  try {
    const books = await NonFictionBook.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error listing non-fiction books', error });
  }
};
