const pool = require('../db'); // Importer la configuration de la connexion

// Créer un nouvel étudiant
const createEtudiant = async (nomPrenom, diocese, annee, idAnneeAca) => {
  try {
    const { rows } = await pool.query(
      'INSERT INTO etudiants (nom_prenom, diocese, annee, idAnnee_aca) VALUES ($1, $2, $3, $4) RETURNING *',
      [nomPrenom, diocese, annee, idAnneeAca]
    );
    return rows[0];
  } catch (err) {
    throw err;
  }
};

// Récupérer tous les étudiants
const getAllEtudiants = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM etudiants');
    return rows;
  } catch (err) {
    throw err;
  }
};

// Récupérer un étudiant par son numéro
const getEtudiantByNumero = async (numero) => {
  try {
    const { rows } = await pool.query('SELECT * FROM etudiants WHERE numero = $1', [numero]);
    return rows[0];
  } catch (err) {
    throw err;
  }
};

// Mettre à jour un étudiant
const updateEtudiant = async (numero, nomPrenom, diocese, annee, idAnneeAca) => {
  try {
    const { rows } = await pool.query(
      'UPDATE etudiants SET nom_prenom = $1, diocese = $2, annee = $3, idAnnee_aca = $4 WHERE numero = $5 RETURNING *',
      [nomPrenom, diocese, annee, idAnneeAca, numero]
    );
    return rows[0];
  } catch (err) {
    throw err;
  }
};

// Supprimer un étudiant
const deleteEtudiant = async (numero) => {
  try {
    const { rows } = await pool.query('DELETE FROM etudiants WHERE numero = $1 RETURNING *', [numero]);
    return rows[0];
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEtudiant,
  getAllEtudiants,
  getEtudiantByNumero,
  updateEtudiant,
  deleteEtudiant,
};