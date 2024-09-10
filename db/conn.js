const { MongoClient } = require("mongodb");

require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const uri = `mongodb://${dbUser}:${dbPassword}@autorack.proxy.rlwy.net:32407`;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("conectando ao MongoDB!");
  } catch (e) {
    console.log(e);
  }
}
run();
module.exports = client;
