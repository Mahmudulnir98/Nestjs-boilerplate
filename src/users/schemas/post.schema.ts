import { IPost } from './../interfaces/post.interface';
import { Schema } from "mongoose";

export const NUser = new Schema<IPost>(
    {
        name: String,
        author: String,
        plot: Number
    
    }
)