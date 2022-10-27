import { PostUserDto } from './dto/post-user.dto';
import { PassUserDto, CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';

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

        //new create user  post request data into database.
        @Post('/update')
        public async updateNUser(
            @Req() req: Request,
            @Body() postUserDto: PostUserDto
        ){
            const nuser = await this.userService.updateNUser(postUserDto)
            return nuser
        }




         //find all users
         @Get('/get')
         public async findall(){
             const users = await this.userService.findAll()
 
             return users
         }
    

   @Get('/got')
   public async findone(
    userId: string
   ){
    const nuser = await this.userService.findOne(userId)
    return nuser

   }
    }