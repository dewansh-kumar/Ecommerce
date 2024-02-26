import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
    },
    
    city: {
      type: String,
    },
    state:{
      type: String,
    },
    postal_code: {
      type: String,
    },
    country: {
      type: String,
    },
    mobile: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserAddress = mongoose.model("UserAddress", userAddressSchema);
