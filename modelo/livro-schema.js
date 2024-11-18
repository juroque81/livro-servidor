const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB!');
})
.catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});

const LivroSchema = new mongoose.Schema({
     titulo: { type: String, required: true },
     resumo: { type: String, required: true },
     autores: { type: [String], required: true },
     codEditora: { type: Number, required: true },
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;