import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
export declare class ProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    sku?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    quantity?: "asc" | "desc" | undefined;
    categories?: CategoryOrderByRelationAggregateInput | undefined;
    orders?: OrderOrderByRelationAggregateInput | undefined;
}
