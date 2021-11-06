import { CategoryAvgOrderByAggregateInput } from "../inputs/CategoryAvgOrderByAggregateInput";
import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
import { CategorySumOrderByAggregateInput } from "../inputs/CategorySumOrderByAggregateInput";
export declare class CategoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: CategoryCountOrderByAggregateInput | undefined;
    _avg?: CategoryAvgOrderByAggregateInput | undefined;
    _max?: CategoryMaxOrderByAggregateInput | undefined;
    _min?: CategoryMinOrderByAggregateInput | undefined;
    _sum?: CategorySumOrderByAggregateInput | undefined;
}
