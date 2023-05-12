const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const markerSchema = new Schema({
  description: String,
  latitude: Number,
  longitude: Number,
});

const Marker = mongoose.model("Marker", markerSchema);

module.exports = Marker;
