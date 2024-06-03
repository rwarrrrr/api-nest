import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { hash } from 'bcryptjs';
import { UserInterface } from './entities/user.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {

    const username = await this.userModel.find({username: createUserDto.username});
    if(username.length > 0 ){
      throw new ConflictException('username duplikat')
    }

    const createdUser = await new this.userModel({
      ...createUserDto,
      password: await hash(createUserDto.password, 10),
      role: 'user',
      active: true,
      createdBy: 'admin',
      createdAt: new Date()
    }).save();

    const { _id, password, createdBy, createdAt, ...user} = createdUser.toObject();

    return user
  }

  async findAll() {
    const users = await this.userModel.find({
      deletedAt: null,
      username: {$ne: 'admin'}
    }).exec();
    return users
  }

  async findOne(id: string) {
    const user = await this.userModel.findById({
      _id: new ObjectId(id),
      deletedAt: null
    }).exec();
    
    if(!user){
      throw new NotFoundException('data user tidak ditemukan')
    }

    return user
  }

  async findByUsername(username: string) {
    const user = await this.userModel.findOne({
      username,
      deletedAt: null
    });
    
    if(!user){
      throw new NotFoundException('data user tidak ditemukan')
    }

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userModel
      .findOneAndUpdate(
        {
          _id: new ObjectId(id)
        }, 
        {
          ...updateUserDto,
          password: await hash(updateUserDto.password, 10),
          updatedBy: 'admin',
          updatedAt: new Date()
        }, 
        { new: true }
      ).exec();

    if(!updateUser){
      throw new NotFoundException('data user tidak ditemukan')
    }

    const { _id, password, updatedBy, updatedAt, createdBy, createdAt, ...user} = updateUser.toObject();
      
    return user
  }

  async remove(id: string) {
    const user = await this.userModel.findOneAndDelete({_id: new ObjectId(id)}).exec();

    if(!user){
      throw new NotFoundException('data user tidak ditemukan')
    }

    return user
  }
}
