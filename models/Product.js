require("dotenv").config();
const conn = require("../db/conn");
const dbName = process.env.DB_NAME;

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  save() {
    const product = conn.db(dbName).collection("products").insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    });

    return product;
  }
}

module.exports = Product;
