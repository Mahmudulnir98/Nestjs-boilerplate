import { ILearns } from './interfaces/learn.interface';
import { Body, Controller, Get, Patch, Post, Put, Req } from '@nestjs/common';
import { LearnService } from './learn.service';
import { Request } from 'express';
import { CreateLearnDto } from './dto/create-learn.dto';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('/learns')
export class LearnController {
  constructor(private readonly LearnService: LearnService) {}
  //schema add
  @Post('/pool')
  public async upon(
    @Req() req: Request,
    @Body() createLearnDto: CreateLearnDto,
  ): Promise<ILearns> {
    return this.LearnService.upon(createLearnDto);
  }

  @Patch('/pol')
  public async upto(
    @Req() req: Request,
    @Body() createLearnDto: CreateLearnDto,
  ): Promise<ILearns> {
    return this.LearnService.upon(createLearnDto);
  }
}
