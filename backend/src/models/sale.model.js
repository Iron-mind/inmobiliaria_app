const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const saleSchema = new Schema({
  name: String,
  value: Number,
  description: String,
},
{
  timestamps: true 
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;