import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashPassword } from 'src/utils/helpers';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async isEmailExist(email: string): Promise<boolean> {
    const isExist = await this.userModel.exists({ email });
    return isExist ? true : false;
  }

  async createUser(createUserDto: CreateUserDto): Promise<{ _id: any }> {
    const { email, password } = createUserDto;
    try {
      const isAlreadyEmail = await this.isEmailExist(email);
      if (isAlreadyEmail)
        throw new BadRequestException(
          `Email ${email} is already exist. Please register again.`,
        );

      const passwordHashed = await hashPassword(password);
      const createdUser = await this.userModel.create({
        email,
        password: passwordHashed,
      });

      return {
        _id: createdUser._id,
      };
    } catch (error) {
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
