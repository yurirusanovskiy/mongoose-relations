const mongoose = require('mongoose');
const Author = require('./models/Author');
const Book = require('./models/Book');
const Publisher = require('./models/Publisher');

const run = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongooseRelations');

    // Create Publisher
    const publisher1 = new Publisher({ name: 'Penguin Random House', founded: 1925 });
    const publisher2 = new Publisher({ name: 'HarperCollins', founded: 1817 });

    await publisher1.save();
    await publisher2.save();

    // Create Author
    const author = new Author({ name: 'J.K. Rowling', birthDate: '1965-07-31' });
    await author.save();

    // Create Book
    const book = new Book({
      title: 'Harry Potter and the Philosopher\'s Stone',
      publishDate: '1997-06-26',
      author: author._id,
      publishers: [publisher1._id, publisher2._id],
    });
    await book.save();

    // Updating author data with the addition of a book
    author.books.push(book._id);
    await author.save();

    // Updating publisher data with book addition
    publisher1.books.push(book._id);
    publisher2.books.push(book._id);
    await publisher1.save();
    await publisher2.save();

    // Getting data using populate
    const foundBook = await Book.findById(book._id)
      .populate('author', 'name')
      .populate('publishers', 'name');

    console.log('Found book:', foundBook);
    
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

run();
