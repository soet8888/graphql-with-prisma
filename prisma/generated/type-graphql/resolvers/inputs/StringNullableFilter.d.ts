import { NestedStringNullableFilter } from "../inputs/NestedStringNullableFilter";
export declare class StringNullableFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    contains?: string | undefined;
    startsWith?: string | undefined;
    endsWith?: string | undefined;
    not?: NestedStringNullableFilter | undefined;
}
