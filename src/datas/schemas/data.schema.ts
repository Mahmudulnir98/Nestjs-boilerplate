import { Schema } from 'mongoose';
import { Datas } from '../interfaces/data.interface';

export const Data = new Schema<Datas>({
  name: String,
  author: String,
  plot: Number,
  email: String,
  username: String,
});
