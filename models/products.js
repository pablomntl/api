const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
}, {versionKey: false}) ;

module.exports = mongoose.model('Products', productsSchema );