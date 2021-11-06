import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: IntNullableWithAggregatesFilter | undefined;
}
