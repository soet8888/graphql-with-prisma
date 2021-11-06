import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    email?: StringFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    address?: StringNullableFilter | undefined;
    orders?: OrderListRelationFilter | undefined;
}
