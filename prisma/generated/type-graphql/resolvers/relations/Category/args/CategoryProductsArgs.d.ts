import { ProductOrderByWithRelationInput } from "../../../inputs/ProductOrderByWithRelationInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
export declare class CategoryProductsArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByWithRelationInput[] | undefined;
    cursor?: ProductWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "sku" | "description" | "quantity"> | undefined;
}
