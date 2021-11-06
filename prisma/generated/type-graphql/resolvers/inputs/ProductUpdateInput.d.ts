import { CategoryUpdateManyWithoutProductsInput } from "../inputs/CategoryUpdateManyWithoutProductsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutProductsInput } from "../inputs/OrderUpdateManyWithoutProductsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    sku?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    quantity?: IntFieldUpdateOperationsInput | undefined;
    categories?: CategoryUpdateManyWithoutProductsInput | undefined;
    orders?: OrderUpdateManyWithoutProductsInput | undefined;
}
