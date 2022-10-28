import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';

// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService, ) {}
        
       
        //create user route 
        @Post('/create')
        public async createUser(
            @Req() req: Request,
            @Body() createUserDto: CreateUserDto
        ){
            const user = await this.userService.createUser(createUserDto)

            return user
        }

        //update user  post request data into database.
        @Post('/update')
        public async updateUser(
            @Req() req: Request,
            @Body() updateUserDto: UpdateUserDto
        ){
            const user = await this.userService.updateUser(updateUserDto)
            return user
        }




         //find all users
         @Get('/get')
         public async findall(){
             const users = await this.userService.findAll()
 
             return users
         }
    

   @Get('/:userId')
   public async findOne(
        @Param('userId') userId:string
    ){
    const users = await this.userService.findOne(userId)
    return users

   }
    }
