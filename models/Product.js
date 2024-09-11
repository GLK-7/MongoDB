require("dotenv").config();
const conn = require("../db/conn");
const dbName = process.env.DB_NAME;
const dbConnection = conn.db(dbName).collection("products");

const { ObjectId } = require("mongodb");

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

  static async getProductById(id) {
    const objId = new ObjectId(id);
    const product = await dbConnection.findOne({ _id: objId });
    return product;
  }

  static async removeProductById(id) {
    const objId = new ObjectId(id);
    await dbConnection.deleteOne({ _id: objId });
    return;
  }

  updateProduct(id) {
    const objId = new ObjectId(id);
    dbConnection.updateOne({ _id: objId }, { $set: this });
    return;
  }
}

module.exports = Product;
