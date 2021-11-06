import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutOrdersInput } from "../inputs/ProductUpdateManyWithoutOrdersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutOrdersInput } from "../inputs/UserUpdateOneWithoutOrdersInput";
export declare class OrderUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    customer?: UserUpdateOneWithoutOrdersInput | undefined;
    products?: ProductUpdateManyWithoutOrdersInput | undefined;
}
