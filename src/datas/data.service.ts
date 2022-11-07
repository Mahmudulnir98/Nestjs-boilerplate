import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDataDto } from './dto/create.data.dto';
import { Datas } from './interfaces/data.interface';
@Injectable()
export class DataService {
  constructor(@InjectModel('Data') private readonly dataModel: Model<Datas>) {}

  //create user
  public async createData(createDataDto: CreateDataDto) {
    const newUser: Datas = {
      name: createDataDto.name,
      author: createDataDto.author,
      plot: createDataDto.plot,
      email: createDataDto.email,
      username: createDataDto.username,
    };

    const data = await this.dataModel.create(newUser);

    console.log(data);

    return data;
  }

  // find method
  public async findAll() {
    const datas = await this.dataModel.find();

    return datas;
  }

  //uodateOne method
}
