import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateDataDto } from './dto/create.data.dto';
import { DataService } from './data.service';

// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('datas')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  //create user route
  @Post('/create')
  public async createData(
    @Req() req: Request,
    @Body() createDataDto: CreateDataDto,
  ) {
    const data = await this.dataService.createData(createDataDto);

    return data;
  }

  //find all users
  @Get('/get')
  public async findall() {
    const datas = await this.dataService.findAll();

    return datas;
  }
}
