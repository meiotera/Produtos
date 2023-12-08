const mongoose = require("mongoose");
const { Schema } = mongoose;

// tudo no mongoose começa com o schema, cada schema é mapeado para uma coleção mongoDB e define o formado do documento.

// criando classe e chamando o método model
const Product = mongoose.model(
  // nome do model
  "Product",
  new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  })
);

module.exports = Product;
