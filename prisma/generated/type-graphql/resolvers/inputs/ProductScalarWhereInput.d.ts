import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    sku?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    quantity?: IntFilter | undefined;
}
