import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class OrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    customer?: UserOrderByWithRelationInput | undefined;
    products?: ProductOrderByRelationAggregateInput | undefined;
}
