const express = require('express');
   const router = express.Router();
   const livroDAO = require('../modelo/livro-dao');

   router.get('/', async (req, res) => {
     try {
       const livros = await livroDAO.obterLivros();
       res.json(livros);
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   });

   router.post('/', async (req, res) => {
     try {
       const livro = req.body;
       await livroDAO.incluir(livro);
       res.json({ message: 'Livro incluído com sucesso!' });
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   });

   router.delete('/:id', async (req, res) => {
     try {
       const { id } = req.params;
       await livroDAO.excluir(id);
       res.json({ message: 'Livro excluído com sucesso!' });
     } catch (err) {
       res.status(500).json({ message: err.message });
     }
   });

   module.exports = router;