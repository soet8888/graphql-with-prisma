import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutOrdersInput {
    create?: ProductCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
