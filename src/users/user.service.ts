import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './interfaces/user.interface';
import { PostUserDto } from './dto/post-user.dto';
import { IPost } from './interfaces/post.interface';
import { CreateNewUserDto } from './dto/create-user.dto';
import { NUsers } from './interfaces/user.interface';
@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUsers>,

    ){}

    //create user
    public async createUser(createUserDto: CreateUserDto){
        const newUser: IUsers = {
            name: createUserDto.name,
            author: createUserDto.author,
            plot: createUserDto.plot,
            email: createUserDto.email,
            username: createUserDto.username
        }

        const user = await this.userModel.create(newUser)

        console.log(user)

        return user

    }

   
   
// new create user

    public async createNUser(createNewUserDto: CreateNewUserDto){
        const newwUser: NUsers = {
            name: createNewUserDto.name,
            author: createNewUserDto.author,
            email: createNewUserDto.email,
            username: createNewUserDto.username
        }

        const nuser = await this.userModel.create(newwUser)

        console.log(nuser)

        return nuser

    }


    public async showAllUsers(){
        const users = await this.userModel.find()

        return users
    }
   
    
 
 
}