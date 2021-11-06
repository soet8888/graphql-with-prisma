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
exports.FindFirstCategoryArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const CategoryOrderByWithRelationInput_1 = require("../../../inputs/CategoryOrderByWithRelationInput");
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../../../inputs/CategoryWhereUniqueInput");
const CategoryScalarFieldEnum_1 = require("../../../../enums/CategoryScalarFieldEnum");
let FindFirstCategoryArgs = class FindFirstCategoryArgs {
};
__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    __metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], FindFirstCategoryArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CategoryOrderByWithRelationInput_1.CategoryOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstCategoryArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], FindFirstCategoryArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstCategoryArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstCategoryArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarFieldEnum_1.CategoryScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstCategoryArgs.prototype, "distinct", void 0);
FindFirstCategoryArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstCategoryArgs);
exports.FindFirstCategoryArgs = FindFirstCategoryArgs;
