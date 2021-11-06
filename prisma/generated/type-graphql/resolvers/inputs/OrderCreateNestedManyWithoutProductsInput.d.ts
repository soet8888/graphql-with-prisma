import { OrderCreateOrConnectWithoutProductsInput } from "../inputs/OrderCreateOrConnectWithoutProductsInput";
import { OrderCreateWithoutProductsInput } from "../inputs/OrderCreateWithoutProductsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutProductsInput {
    create?: OrderCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
