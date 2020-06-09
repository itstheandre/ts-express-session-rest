import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { PromiseProvider } from "mongoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class PostModel extends TimeStamps {}

export const Post = getModelForClass(PostModel);
