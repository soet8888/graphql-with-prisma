import { Order } from "../models/Order";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    address?: string | null;
    orders?: Order[];
    _count?: UserCount | null;
}
