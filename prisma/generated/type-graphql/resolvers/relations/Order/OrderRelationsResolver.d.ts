import { Order } from "../../../models/Order";
import { Product } from "../../../models/Product";
import { User } from "../../../models/User";
import { OrderProductsArgs } from "./args/OrderProductsArgs";
export declare class OrderRelationsResolver {
    customer(order: Order, ctx: any): Promise<User | null>;
    products(order: Order, ctx: any, args: OrderProductsArgs): Promise<Product[]>;
}
