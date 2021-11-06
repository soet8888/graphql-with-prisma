import { UserCreateOrConnectWithoutOrdersInput } from "../inputs/UserCreateOrConnectWithoutOrdersInput";
import { UserCreateWithoutOrdersInput } from "../inputs/UserCreateWithoutOrdersInput";
import { UserUpdateWithoutOrdersInput } from "../inputs/UserUpdateWithoutOrdersInput";
import { UserUpsertWithoutOrdersInput } from "../inputs/UserUpsertWithoutOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutOrdersInput {
    create?: UserCreateWithoutOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: UserUpsertWithoutOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: UserUpdateWithoutOrdersInput | undefined;
}
