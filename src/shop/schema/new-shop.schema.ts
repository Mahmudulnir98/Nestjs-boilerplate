import { Schema } from "mongoose";
import { IShops } from "../interface/shop.interface";
export const Shop = new Schema<IShops>(
    {
        name: String,
        price: Number,
        discount: Number,
        size: Number,
        id: Number,
        description: String

    
    }
)