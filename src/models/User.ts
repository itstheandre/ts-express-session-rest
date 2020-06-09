import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { Base } from "@typegoose/typegoose/lib/defaultClasses";
import { PostModel } from "./Post";

export class UserModel extends Base<string> {
  @prop({ unique: true })
  username?: string;

  @prop({ required: true })
  password?: string;

  @prop({ ref: () => PostModel })
  _upvotes?: Ref<PostModel[]>;
}

export const User = getModelForClass(UserModel);
