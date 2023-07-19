const mongoose = require("mongoose");

const CarSchema = mongoose.Schema(
  {
    model_name: { type: String, required: true },
    model_year: { type: String, required: true },
    price: { type: Number, required: true },
    colors: { type: String, required: true },
    mileage: { type: Number, required: true },
    power: { type: Number, required: true },
    max_speed: { type: Number, required: true },
    image: {type: String}
  },
  {
    versionKey: false,
  }
);

const CarModel = mongoose.model("CarModel", CarSchema);

module.exports = { CarModel };
