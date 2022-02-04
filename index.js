const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect('mongodb+srv://admin:lamalama26071990@cluster0.zgwvc.mongodb.net/gamingNews?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    });

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  } catch (err) {console.log(err)}
};
