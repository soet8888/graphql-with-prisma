import { Category } from "../../../models/Category";
import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { ProductCategoriesArgs } from "./args/ProductCategoriesArgs";
import { ProductOrdersArgs } from "./args/ProductOrdersArgs";
export declare class ProductRelationsResolver {
    categories(product: Product, ctx: any, args: ProductCategoriesArgs): Promise<Category[]>;
    orders(product: Product, ctx: any, args: ProductOrdersArgs): Promise<Order[]>;
}
