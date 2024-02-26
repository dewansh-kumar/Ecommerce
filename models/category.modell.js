import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
            unique: true
        },
        image: {
            type: String,
            require: true,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Item"
            }
        ]
    },
    {
        timestamps: true
    }
)