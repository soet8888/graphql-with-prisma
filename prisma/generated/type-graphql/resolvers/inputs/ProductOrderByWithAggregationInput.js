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
exports.ProductOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ProductAvgOrderByAggregateInput_1 = require("../inputs/ProductAvgOrderByAggregateInput");
const ProductCountOrderByAggregateInput_1 = require("../inputs/ProductCountOrderByAggregateInput");
const ProductMaxOrderByAggregateInput_1 = require("../inputs/ProductMaxOrderByAggregateInput");
const ProductMinOrderByAggregateInput_1 = require("../inputs/ProductMinOrderByAggregateInput");
const ProductSumOrderByAggregateInput_1 = require("../inputs/ProductSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByWithAggregationInput = class ProductOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "sku", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "description", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ProductOrderByWithAggregationInput.prototype, "quantity", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductCountOrderByAggregateInput_1.ProductCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ProductCountOrderByAggregateInput_1.ProductCountOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductAvgOrderByAggregateInput_1.ProductAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ProductAvgOrderByAggregateInput_1.ProductAvgOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductMaxOrderByAggregateInput_1.ProductMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ProductMaxOrderByAggregateInput_1.ProductMaxOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductMinOrderByAggregateInput_1.ProductMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ProductMinOrderByAggregateInput_1.ProductMinOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProductSumOrderByAggregateInput_1.ProductSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ProductSumOrderByAggregateInput_1.ProductSumOrderByAggregateInput)
], ProductOrderByWithAggregationInput.prototype, "_sum", void 0);
ProductOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ProductOrderByWithAggregationInput);
exports.ProductOrderByWithAggregationInput = ProductOrderByWithAggregationInput;
