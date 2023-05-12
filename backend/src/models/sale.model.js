const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const saleSchema = new Schema({
  name: String,
  value: Number,
  description: String,
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;