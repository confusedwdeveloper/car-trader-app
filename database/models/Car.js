import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  kilometers: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

export default mongoose.model("car", CarSchema);
