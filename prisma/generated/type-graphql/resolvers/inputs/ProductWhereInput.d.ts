import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductWhereInput {
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    sku?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    quantity?: IntFilter | undefined;
    categories?: CategoryListRelationFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
}
