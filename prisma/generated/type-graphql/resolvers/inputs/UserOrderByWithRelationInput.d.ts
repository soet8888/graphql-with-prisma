import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    orders?: OrderOrderByRelationAggregateInput | undefined;
}
