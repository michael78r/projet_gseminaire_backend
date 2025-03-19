const etudiantsModel = require('../models/etudiants');

// Créer un nouvel étudiant
const createEtudiant = async (req, res) => {
  try {
    const { nomPrenom, diocese, annee, idAnneeAca } = req.body;
    const newEtudiant = await etudiantsModel.createEtudiant(nomPrenom, diocese, annee, idAnneeAca);
    res.status(201).json(newEtudiant);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Récupérer tous les étudiants
const getAllEtudiants = async (req, res) => {
  try {
    const etudiants = await etudiantsModel.getAllEtudiants();
    res.json(etudiants);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Récupérer un étudiant par son numéro
const getEtudiantByNumero = async (req, res) => {
  try {
    const etudiant = await etudiantsModel.getEtudiantByNumero(req.params.numero);
    if (!etudiant) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.json(etudiant);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Mettre à jour un étudiant
const updateEtudiant = async (req, res) => {
  try {
    const { numero } = req.params;
    const { nomPrenom, diocese, annee, idAnneeAca } = req.body;
    const updatedEtudiant = await etudiantsModel.updateEtudiant(numero, nomPrenom, diocese, annee, idAnneeAca);
    if (!updatedEtudiant) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.json(updatedEtudiant);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

// Supprimer un étudiant
const deleteEtudiant = async (req, res) => {
  try {
    const { numero } = req.params;
    const deletedEtudiant = await etudiantsModel.deleteEtudiant(numero);
    if (!deletedEtudiant) {
      return res.status(404).json({ message: 'Étudiant non trouvé' });
    }
    res.json(deletedEtudiant);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
};

module.exports = {
  createEtudiant,
  getAllEtudiants,
  getEtudiantByNumero,
  updateEtudiant,
  deleteEtudiant,
};