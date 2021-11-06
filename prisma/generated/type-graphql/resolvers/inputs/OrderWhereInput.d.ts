import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class OrderWhereInput {
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: IntNullableFilter | undefined;
    customer?: UserRelationFilter | undefined;
    products?: ProductListRelationFilter | undefined;
}
