import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedManyWithoutProductsInput {
    create?: CategoryCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput[] | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
}
