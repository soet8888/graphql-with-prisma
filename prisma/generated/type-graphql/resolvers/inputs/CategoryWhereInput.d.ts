import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CategoryWhereInput {
    AND?: CategoryWhereInput[] | undefined;
    OR?: CategoryWhereInput[] | undefined;
    NOT?: CategoryWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    products?: ProductListRelationFilter | undefined;
}
