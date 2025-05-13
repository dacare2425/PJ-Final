const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta de los archivos compilados de Angular
const distPath = path.join(__dirname, 'dist/web-sharks/browser');

app.use(express.static(distPath));

app.get('/api/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('/api/torneo-bbu', (req, res) => {
  res.sendFile(path.join(distPath, 'torneo-bbu.html'));
});

app.get('/api/contacto', (req, res) => {
  res.sendFile(path.join(distPath, 'contacto.html'));
});

app.get('/api/entrenamientos', (req, res) => {
  res.sendFile(path.join(distPath, 'entrenamientos.html'));
});

/*
// Opción opcional para ruta 404 personalizada
app.use((req, res) => {
  res.status(404).sendFile(path.join(distPath, '404.html'));
});
*/

app.listen(PORT, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:${PORT}`);
});
