import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILearns } from './interfaces/learn.interface';
import { CreateLearnDto } from './dto/create-learn.dto';
@Injectable()
export class LearnService {
  constructor(
    @InjectModel('Learn')
    private readonly learnModel: Model<ILearns>,
  ) {}

  // schema add
  public upon(createLearnDto: CreateLearnDto): ILearns {
    const underSchema: ILearns = {
      name: createLearnDto.name,
      publishedYear: createLearnDto.publishedYear,
      chapter: createLearnDto.chapter,
      author: createLearnDto.author,
    };

    return underSchema;
  }

  public upto(createLearnDto: CreateLearnDto): ILearns {
    const underSchema: ILearns = {
      name: createLearnDto.name,
      publishedYear: createLearnDto.publishedYear,
      chapter: createLearnDto.chapter,
      author: createLearnDto.author,
    };

    return underSchema;
  }
}
