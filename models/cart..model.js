import mongoose from "mongoose";

const cart_Item_schema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    purchasePrice: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    products: [cart_Item_schema],
  },
  {
    timestamps: true,
  }
);

export const CartItem = mongoose.model("CartItem", cart_Item_schema);
export const Cart = mongoose.model("Cart", cartSchema);
