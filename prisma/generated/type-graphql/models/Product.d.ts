import { Category } from "../models/Category";
import { Order } from "../models/Order";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    sku: string;
    description?: string | null;
    quantity: number;
    categories?: Category[];
    orders?: Order[];
    _count?: ProductCount | null;
}
