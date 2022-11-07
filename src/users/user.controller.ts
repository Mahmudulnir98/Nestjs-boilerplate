import { CreateUserDto } from './dto/create-user.dto';
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
import { UserService } from './user.service';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';

// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //create user route
  @Post('/create')
  public async createUser(
    @Req() req: Request,
    @Body() createUserDto: CreateUserDto,
  ) {
    const user = await this.userService.createUser(createUserDto);

    return user;
  }

  //find all users
  @Get('/get')
  public async findall() {
    const users = await this.userService.findAll();

    return users;
  }

  @Get('/:userId')
  public async findOne(@Param('userId') userId: string) {
    const user = await this.userService.findOne(userId);
    return user;
  }

  //update user  post request data into database.
  @Patch('/:id')
  public async updateUser(
    @Param() id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.userService.updateUser(id, updateUserDto);
    return user;
  }
}
