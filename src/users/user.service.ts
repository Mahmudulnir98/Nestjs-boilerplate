import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUsers } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
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
//
    public async updateUser(updateUserDto: UpdateUserDto){
        const updateUser: IUsers = {
           name: updateUserDto.name,
           author: updateUserDto.author,
           plot: updateUserDto.plot,
           email: updateUserDto.email,
           username: updateUserDto.username 
        }
        const user = await this.userModel.updateOne(updateUser)
        console.log(user)
        return user

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
        const user= await this.userModel.findById(userId)
        return user
    }
   
    //uodateOne method
 
}