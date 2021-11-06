import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CategoryScalarWhereWithAggregatesInput {
    AND?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
}
