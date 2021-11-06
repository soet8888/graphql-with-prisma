import { ProductCreateNestedManyWithoutOrdersInput } from "../inputs/ProductCreateNestedManyWithoutOrdersInput";
import { UserCreateNestedOneWithoutOrdersInput } from "../inputs/UserCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    customer?: UserCreateNestedOneWithoutOrdersInput | undefined;
    products?: ProductCreateNestedManyWithoutOrdersInput | undefined;
}
