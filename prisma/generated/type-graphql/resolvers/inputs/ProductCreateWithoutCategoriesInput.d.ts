import { OrderCreateNestedManyWithoutProductsInput } from "../inputs/OrderCreateNestedManyWithoutProductsInput";
export declare class ProductCreateWithoutCategoriesInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    sku: string;
    description?: string | undefined;
    quantity: number;
    orders?: OrderCreateNestedManyWithoutProductsInput | undefined;
}
