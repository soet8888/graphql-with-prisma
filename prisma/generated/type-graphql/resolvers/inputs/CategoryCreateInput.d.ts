import { ProductCreateNestedManyWithoutCategoriesInput } from "../inputs/ProductCreateNestedManyWithoutCategoriesInput";
export declare class CategoryCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    products?: ProductCreateNestedManyWithoutCategoriesInput | undefined;
}
