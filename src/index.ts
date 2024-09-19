import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import caseRoutes from './routes/caseRoutes';
import { setupSwagger } from './swagger'; // Importación de Swagger

// Configuración de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas
app.use('/api/cases', caseRoutes);

// Configuración de Swagger
setupSwagger(app); // Uso de Swagger para documentar la API

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/monkeypox')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
