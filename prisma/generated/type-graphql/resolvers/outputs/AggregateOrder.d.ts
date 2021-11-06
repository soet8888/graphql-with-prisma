import { OrderAvgAggregate } from "../outputs/OrderAvgAggregate";
import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
import { OrderSumAggregate } from "../outputs/OrderSumAggregate";
export declare class AggregateOrder {
    _count: OrderCountAggregate | null;
    _avg: OrderAvgAggregate | null;
    _sum: OrderSumAggregate | null;
    _min: OrderMinAggregate | null;
    _max: OrderMaxAggregate | null;
}
