import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutOrdersInput } from "../inputs/ProductUpdateManyWithWhereWithoutOrdersInput";
import { ProductUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutOrdersInput";
import { ProductUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutOrdersInput {
    create?: ProductCreateWithoutOrdersInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutOrdersInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
