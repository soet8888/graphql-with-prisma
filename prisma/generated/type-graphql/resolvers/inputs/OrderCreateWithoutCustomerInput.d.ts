import { ProductCreateNestedManyWithoutOrdersInput } from "../inputs/ProductCreateNestedManyWithoutOrdersInput";
export declare class OrderCreateWithoutCustomerInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    products?: ProductCreateNestedManyWithoutOrdersInput | undefined;
}
