import { Schema } from "mongoose";
import { NShops } from "../interface/updateshop.interface";
export const NShop = new Schema<NShops>(
    {
        name: String,
        price: Number,
        discount: Number,
        size: Number,
        id: Number,
        description: String

    
    }
)