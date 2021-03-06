"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const OrderAvgOrderByAggregateInput_1 = require("../inputs/OrderAvgOrderByAggregateInput");
const OrderCountOrderByAggregateInput_1 = require("../inputs/OrderCountOrderByAggregateInput");
const OrderMaxOrderByAggregateInput_1 = require("../inputs/OrderMaxOrderByAggregateInput");
const OrderMinOrderByAggregateInput_1 = require("../inputs/OrderMinOrderByAggregateInput");
const OrderSumOrderByAggregateInput_1 = require("../inputs/OrderSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderOrderByWithAggregationInput = class OrderOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], OrderOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderCountOrderByAggregateInput_1.OrderCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", OrderCountOrderByAggregateInput_1.OrderCountOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderAvgOrderByAggregateInput_1.OrderAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", OrderAvgOrderByAggregateInput_1.OrderAvgOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderMaxOrderByAggregateInput_1.OrderMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", OrderMaxOrderByAggregateInput_1.OrderMaxOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderMinOrderByAggregateInput_1.OrderMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", OrderMinOrderByAggregateInput_1.OrderMinOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => OrderSumOrderByAggregateInput_1.OrderSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", OrderSumOrderByAggregateInput_1.OrderSumOrderByAggregateInput)
], OrderOrderByWithAggregationInput.prototype, "_sum", void 0);
OrderOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], OrderOrderByWithAggregationInput);
exports.OrderOrderByWithAggregationInput = OrderOrderByWithAggregationInput;
