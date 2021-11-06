import { CategoryCreateNestedManyWithoutProductsInput } from "../inputs/CategoryCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "../inputs/OrderCreateNestedManyWithoutProductsInput";
export declare class ProductCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    sku: string;
    description?: string | undefined;
    quantity: number;
    categories?: CategoryCreateNestedManyWithoutProductsInput | undefined;
    orders?: OrderCreateNestedManyWithoutProductsInput | undefined;
}
