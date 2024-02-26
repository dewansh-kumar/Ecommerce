import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        total: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)