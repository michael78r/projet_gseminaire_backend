const express = require('express');
const etudiantsController = require('../controller/etudiantController');

const router = express.Router();

router.post('/', etudiantsController.createEtudiant); 
router.get('/', etudiantsController.getAllEtudiants); 
router.get('/:numero', etudiantsController.getEtudiantByNumero); 
router.put('/:numero', etudiantsController.updateEtudiant); 
router.delete('/:numero', etudiantsController.deleteEtudiant); 

module.exports = router;