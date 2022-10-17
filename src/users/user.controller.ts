import { PassUserDto, CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { IUsers } from './interfaces/user.interface';
import { PostUserDto } from './dto/post-user.dto';
import { CreateNewUserDto } from './dto/create-user.dto';

// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService, ) {}
        
        //find all users
        @Get('/get')
        public async showAllUsers(){
            const users = await this.userService.showAllUsers()

            return users
        }


        //create user route 
        @Post('/create')
        public async createUser(
            @Req() req: Request,
            @Body() createUserDto: CreateUserDto
        ){
            const user = await this.userService.createUser(createUserDto)

            return user
        }

        //new create user  post request data into database.

        @Post('/newcreate')
        public async createNUser(
            @Req() req: Request,
            @Body() createNewUserDto: CreateNewUserDto
        ){
            const nuser = await this.userService.createNUser(createNewUserDto)

            return nuser
        }
    
    
    }