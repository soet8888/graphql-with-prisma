import { Order } from "../../../models/Order";
import { User } from "../../../models/User";
import { UserOrdersArgs } from "./args/UserOrdersArgs";
export declare class UserRelationsResolver {
    orders(user: User, ctx: any, args: UserOrdersArgs): Promise<Order[]>;
}
