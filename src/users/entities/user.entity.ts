import { ObjectId } from "mongoose";

export interface UserInterface {
    _id: ObjectId;
    username: string;
    password: string;
    role: string;
    active: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}