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
exports.CategoryGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CategoryAvgAggregate_1 = require("../outputs/CategoryAvgAggregate");
const CategoryCountAggregate_1 = require("../outputs/CategoryCountAggregate");
const CategoryMaxAggregate_1 = require("../outputs/CategoryMaxAggregate");
const CategoryMinAggregate_1 = require("../outputs/CategoryMinAggregate");
const CategorySumAggregate_1 = require("../outputs/CategorySumAggregate");
let CategoryGroupBy = class CategoryGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CategoryGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CategoryGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CategoryGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CategoryGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryCountAggregate_1.CategoryCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", CategoryCountAggregate_1.CategoryCountAggregate)
], CategoryGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryAvgAggregate_1.CategoryAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", CategoryAvgAggregate_1.CategoryAvgAggregate)
], CategoryGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategorySumAggregate_1.CategorySumAggregate, {
        nullable: true
    }),
    __metadata("design:type", CategorySumAggregate_1.CategorySumAggregate)
], CategoryGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryMinAggregate_1.CategoryMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", CategoryMinAggregate_1.CategoryMinAggregate)
], CategoryGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryMaxAggregate_1.CategoryMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", CategoryMaxAggregate_1.CategoryMaxAggregate)
], CategoryGroupBy.prototype, "_max", void 0);
CategoryGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], CategoryGroupBy);
exports.CategoryGroupBy = CategoryGroupBy;
