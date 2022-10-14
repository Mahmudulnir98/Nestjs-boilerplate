import { PassUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { IUsers } from './interfaces/user.interface';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('/users')
export class UserController {
    constructor(private readonly UserService: UserService) {}
   
    @Post('/pass')
    public async updateBook(
        @Req() req: Request,
        @Body() passUserDto: PassUserDto
    ): Promise<IUsers> {
        return this.UserService.updateBook(passUserDto)
    }

    

}