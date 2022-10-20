import { Schema } from "mongoose";
import { IUsers } from "../interfaces/user.interface";
import { NUsers } from "../interfaces/user.interface";

export const User = new Schema<IUsers>(
    {
        name: String,
        author: String,
        plot: Number,
        email: String,
        username: String
    
    }
)

export const NUser = new Schema<NUsers>(
    {
        name: String,
        author: String,
        email: String,
        username: String
    
    }
)