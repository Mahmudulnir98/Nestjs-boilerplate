import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './interfaces/user.interface';
import { PostUserDto } from './dto/post-user.dto';
import { IPost } from './interfaces/post.interface';
@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<IUsers>,
        @InjectModel('NUser') private readonly nuserModel: Model<IPost>

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

    public async updateNUser(postUserDto: PostUserDto){
        const updateNUser: IPost = {
           name: postUserDto.name,
           author: postUserDto.author,
           plot: postUserDto.plot 
        }
        const nuser = await this.nuserModel.create(updateNUser)
        console.log(nuser)
        return nuser

    }

   
   


// find method
    public async findAll(){
        const users = await this.userModel.find()

        return users
    }

//findOne method
    public async findOne(
        userId:string
    ){
        const nuser= await this.userModel.findById(userId)
        return nuser
    }
   
    //uodateOne method
 
}