import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CategoryScalarWhereInput {
    AND?: CategoryScalarWhereInput[] | undefined;
    OR?: CategoryScalarWhereInput[] | undefined;
    NOT?: CategoryScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
}
