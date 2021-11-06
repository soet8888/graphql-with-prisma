import { ProductCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductCreateOrConnectWithoutCategoriesInput";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutCategoriesInput {
    create?: ProductCreateWithoutCategoriesInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
