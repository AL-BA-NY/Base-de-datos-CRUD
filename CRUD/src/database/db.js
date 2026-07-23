const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/sport_club";

async function connectMongoose() {
    await mongoose.connect(mongoDB);

mongoose.connection.on("error", (err) => {
    console.error("Error de conexión a MongoDB:", err);
});

mongoose.connection.on("disconnected", () => {
    console.warn("Desconectado de MongoDB");
});

}

try {
    connectMongoose();
    console.log("Conexión exitosa a MongoDB");
} catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
}

