import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class CategoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    products?: ProductOrderByRelationAggregateInput | undefined;
}
