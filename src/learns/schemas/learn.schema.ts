import { Schema } from "mongoose";
import { ILearns } from "../interfaces/learn.interface";
export const Learn = new Schema<ILearns>(
    {
        name: String,
        author: String,
        publishedYear: Number,
        chapter: Number,
    
    }
)