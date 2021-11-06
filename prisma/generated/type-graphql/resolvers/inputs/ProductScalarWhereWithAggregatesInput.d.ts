import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: ProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    sku?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    quantity?: IntWithAggregatesFilter | undefined;
}
