import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    rating: {
      type: Number,
      required: true,
      min: [0, "Invalid rating"],
      max: [5, "Invalid rating"],
    },
    ratingCount: {
      type: Number,
      default: 0,
      min: [0, "Invalid rating count"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  },
  {
    timestamps: true,
  }
);

export const Item = mongoose.model("Item", itemSchema);
