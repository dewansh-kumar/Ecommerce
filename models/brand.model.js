import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        img: {
            String: true
        }
    },
    {
        timestamps: true
    }
)