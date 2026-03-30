import { User } from "../models/user.model";

export interface DbSchema {
  users: User[];
}