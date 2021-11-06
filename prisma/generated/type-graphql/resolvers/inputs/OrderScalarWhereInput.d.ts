import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: IntNullableFilter | undefined;
}
