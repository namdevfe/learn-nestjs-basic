import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ default: 'User' })
  role: string;

  @Prop()
  refreshToken: string;

  @Prop()
  refreshTokenExpiredAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
