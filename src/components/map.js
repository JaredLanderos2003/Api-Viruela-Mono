// Usando Express.js
const express = require('express');
const app = express();

// Ruta para obtener el token de Mapbox
app.get('/api/mapbox-token', (req, res) => {
    // Enviar el token desde las variables de entorno
    res.json({ token: process.env.MAPBOX_ACCESS_TOKEN });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});
