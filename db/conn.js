const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

async function connect() {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.4misw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  const connection = mongoose.connection;
  connection.on("error", () => {
    console.error("Erro ao conectar com MongoDB");
  });

  connection.on("open", () => {
    console.error("Conectado ao MongoDB");
  });
}

connect();
module.exports = mongoose;
