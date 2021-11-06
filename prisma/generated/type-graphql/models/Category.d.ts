import { Product } from "../models/Product";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";
export declare class Category {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    products?: Product[];
    _count?: CategoryCount | null;
}
