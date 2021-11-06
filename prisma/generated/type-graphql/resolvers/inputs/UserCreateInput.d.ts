import { OrderCreateNestedManyWithoutCustomerInput } from "../inputs/OrderCreateNestedManyWithoutCustomerInput";
export declare class UserCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    email: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    address?: string | undefined;
    orders?: OrderCreateNestedManyWithoutCustomerInput | undefined;
}
