import { Schema } from "mongoose";
import { IUsers } from "../interfaces/user.interface";

export const User = new Schema<IUsers>(
    {
        name: String,
        author: String,
        plot: Number
    
    }
)