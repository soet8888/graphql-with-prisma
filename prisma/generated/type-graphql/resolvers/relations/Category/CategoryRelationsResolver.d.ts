import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
import { CategoryProductsArgs } from "./args/CategoryProductsArgs";
export declare class CategoryRelationsResolver {
    products(category: Category, ctx: any, args: CategoryProductsArgs): Promise<Product[]>;
}
