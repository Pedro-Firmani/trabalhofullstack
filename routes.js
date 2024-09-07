const express = require('express');
const pessoaController = require('./controllers/PessoaController');
const router = express.Router();

router.post('/pessoa', pessoaController.createPessoa);
router.get('/pessoa', pessoaController.getAllPessoas);
router.get('/pessoa', pessoaController.getPessoaById);
router.put('/pessoa', pessoaController.updatePessoa);
router.delete('/pessoa', pessoaController.deletePessoa);

module.exports = router;