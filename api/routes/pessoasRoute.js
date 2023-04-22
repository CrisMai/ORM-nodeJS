const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula);
router.post('/niveis/:id/restaura', NivelController.restauraNivel);
router.post('/turmas/:id/restaura', TurmaController.restauraTurma);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;