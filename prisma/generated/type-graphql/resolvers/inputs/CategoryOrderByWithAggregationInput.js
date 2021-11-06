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
exports.CategoryOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CategoryAvgOrderByAggregateInput_1 = require("../inputs/CategoryAvgOrderByAggregateInput");
const CategoryCountOrderByAggregateInput_1 = require("../inputs/CategoryCountOrderByAggregateInput");
const CategoryMaxOrderByAggregateInput_1 = require("../inputs/CategoryMaxOrderByAggregateInput");
const CategoryMinOrderByAggregateInput_1 = require("../inputs/CategoryMinOrderByAggregateInput");
const CategorySumOrderByAggregateInput_1 = require("../inputs/CategorySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoryOrderByWithAggregationInput = class CategoryOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], CategoryOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryCountOrderByAggregateInput_1.CategoryCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", CategoryCountOrderByAggregateInput_1.CategoryCountOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryAvgOrderByAggregateInput_1.CategoryAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", CategoryAvgOrderByAggregateInput_1.CategoryAvgOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryMaxOrderByAggregateInput_1.CategoryMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", CategoryMaxOrderByAggregateInput_1.CategoryMaxOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryMinOrderByAggregateInput_1.CategoryMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", CategoryMinOrderByAggregateInput_1.CategoryMinOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategorySumOrderByAggregateInput_1.CategorySumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", CategorySumOrderByAggregateInput_1.CategorySumOrderByAggregateInput)
], CategoryOrderByWithAggregationInput.prototype, "_sum", void 0);
CategoryOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], CategoryOrderByWithAggregationInput);
exports.CategoryOrderByWithAggregationInput = CategoryOrderByWithAggregationInput;
