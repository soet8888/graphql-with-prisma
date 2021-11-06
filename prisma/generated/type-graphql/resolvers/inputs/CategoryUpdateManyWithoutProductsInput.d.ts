import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutProductsInput } from "../inputs/CategoryUpdateManyWithWhereWithoutProductsInput";
import { CategoryUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutProductsInput";
import { CategoryUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateManyWithoutProductsInput {
    create?: CategoryCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: CategoryUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
    set?: CategoryWhereUniqueInput[] | undefined;
    disconnect?: CategoryWhereUniqueInput[] | undefined;
    delete?: CategoryWhereUniqueInput[] | undefined;
    update?: CategoryUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: CategoryUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: CategoryScalarWhereInput[] | undefined;
}
