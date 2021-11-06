import { CategoryAvgAggregate } from "../outputs/CategoryAvgAggregate";
import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
import { CategorySumAggregate } from "../outputs/CategorySumAggregate";
export declare class AggregateCategory {
    _count: CategoryCountAggregate | null;
    _avg: CategoryAvgAggregate | null;
    _sum: CategorySumAggregate | null;
    _min: CategoryMinAggregate | null;
    _max: CategoryMaxAggregate | null;
}
