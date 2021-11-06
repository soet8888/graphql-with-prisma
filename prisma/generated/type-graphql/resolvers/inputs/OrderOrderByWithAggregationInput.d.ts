import { OrderAvgOrderByAggregateInput } from "../inputs/OrderAvgOrderByAggregateInput";
import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
import { OrderSumOrderByAggregateInput } from "../inputs/OrderSumOrderByAggregateInput";
export declare class OrderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: OrderCountOrderByAggregateInput | undefined;
    _avg?: OrderAvgOrderByAggregateInput | undefined;
    _max?: OrderMaxOrderByAggregateInput | undefined;
    _min?: OrderMinOrderByAggregateInput | undefined;
    _sum?: OrderSumOrderByAggregateInput | undefined;
}
