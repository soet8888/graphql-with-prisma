import { Product } from "../models/Product";
import { User } from "../models/User";
import { OrderCount } from "../resolvers/outputs/OrderCount";
export declare class Order {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId?: number | null;
    customer?: User | null;
    products?: Product[];
    _count?: OrderCount | null;
}
