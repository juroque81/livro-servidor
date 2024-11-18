const mongoose = require('mongoose');

const banco = mongoose.connect('mongodb://localhost:27017/livraria', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

module.exports = banco;