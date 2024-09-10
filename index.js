const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const conn = require("./db/conn");
require("dotenv").config();

const productsRoutes = require("./routes/productsRoutes");

// Configuração do motor de visualização
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Middleware para ler corpo da requisição
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/products", productsRoutes);
app.use("/", productsRoutes);

app.listen(3000, () => {
  console.log("App rodando!");
});
