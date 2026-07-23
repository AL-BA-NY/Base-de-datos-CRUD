const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors');
const path = require('path');
const app = express();


///---MIDDLEWARES---///

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


////////// BASE DE DATOS ////

const mongoose = require("mongoose");

const mongoDB = process.env.MONGODB_URI || "mongodb://localhost:27017/sport_club";

async function connectMongoose() {
    await mongoose.connect(mongoDB);


    mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
});

}

try {
    connectMongoose();
} catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
}


// RUTAS DE LA API //
const calendarioRoutes = require('./src/routes/calendarioRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const futbolistasRoutes = require('./src/routes/futbolistasRoutes');
const pagosRoutes = require('./src/routes/pagosRoutes');
const cobrosRoutes = require('./src/routes/cobrosRoutes');
const cuentasPagosRoutes = require('./src/routes/cuentas_pagosRoutes');

app.use('/api/calendario', calendarioRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/futbolistas', futbolistasRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/cobros', cobrosRoutes);
app.use('/api/cuentas-pago', cuentasPagosRoutes);


///RUTA PARA SERVIR FRONTED//

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'view', 'index.html'));
});


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})