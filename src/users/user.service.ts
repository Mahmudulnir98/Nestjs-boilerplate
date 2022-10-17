import { PassUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './interfaces/user.interface';
import { PostUserDto } from './dto/post-user.dto';
import { IPost } from './interfaces/post.interface';
@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private readonly userModel: Model<IUsers>
    ){}
    
    public updateBook( passUserDto: PassUserDto): IUsers {
        const passUser: IUsers = {
            name: passUserDto.name,
            author: passUserDto.author,
            plot: passUserDto.plot
        }

        return passUser

    }
    
    public under( postUserDto: PostUserDto): IPost {
        const underSchema: IUsers = {
            name: postUserDto.name,
            author: postUserDto.author,
            plot: postUserDto.plot
        }

        return underSchema

    }
    

 
}