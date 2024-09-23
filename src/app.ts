import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Rutas
app.use(router);

// Conexión a la base de datos
db().then(() => {
  console.log("Conectado a la base de datos");
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
