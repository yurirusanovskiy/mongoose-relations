const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/api', routes);

const run = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongooseRelations');

    console.log('MongoDB is running');
    
    app.listen(3000, () => {
      console.log('The server is running on port 3000');
    });

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

run();
