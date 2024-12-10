const FictionBook = require('../models/FictionBook');

/**
 * Creates a new fiction book.
 * @param {Object} req Request object containing book details.
 * @param {Object} res Response object.
 */
exports.createFictionBook = async (req, res) => {
  try {
    const newBook = new FictionBook(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};
