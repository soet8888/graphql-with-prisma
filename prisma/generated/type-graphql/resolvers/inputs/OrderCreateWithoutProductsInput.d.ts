import { UserCreateNestedOneWithoutOrdersInput } from "../inputs/UserCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutProductsInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    customer?: UserCreateNestedOneWithoutOrdersInput | undefined;
}
