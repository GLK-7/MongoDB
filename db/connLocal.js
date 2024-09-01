const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/testemongodb";
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
