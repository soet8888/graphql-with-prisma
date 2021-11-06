import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderUpdateWithoutProductsInput } from "../inputs/OrderUpdateWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpsertWithWhereUniqueWithoutProductsInput {
    where: OrderWhereUniqueInput;
    update: OrderUpdateWithoutProductsInput;
    create: OrderCreateWithoutProductsInput;
}
