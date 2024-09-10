require("dotenv").config();
const conn = require("../db/conn");
const dbName = process.env.DB_NAME;
const dbConnection = conn.db(dbName).collection("products");

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }
  save() {
    const product = conn.db(dbName).collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const products = dbConnection.find().toArray();
    return products;
  }
}

module.exports = Product;
