// Importer les modules nécessaires
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const etudiantRoute = require('./routes/etudiantRoute')

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Utiliser le port défini dans .env ou 3000 par défaut

app.use(express.json());
app.use(cors({
    // origin: 'http://localhost:4200', 
    // credentials: true 
  }));

app.use('/etudiant', etudiantRoute); 

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API!');
});

// Gestion des erreurs 404 (route non trouvée)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur serveur' });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});