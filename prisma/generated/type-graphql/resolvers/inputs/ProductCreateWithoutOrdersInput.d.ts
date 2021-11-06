import { CategoryCreateNestedManyWithoutProductsInput } from "../inputs/CategoryCreateNestedManyWithoutProductsInput";
export declare class ProductCreateWithoutOrdersInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    sku: string;
    description?: string | undefined;
    quantity: number;
    categories?: CategoryCreateNestedManyWithoutProductsInput | undefined;
}
