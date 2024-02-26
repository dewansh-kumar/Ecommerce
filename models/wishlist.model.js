import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        isLiked: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export const Wishlist = mongoose.model("Wishlist", wishlistSchema)