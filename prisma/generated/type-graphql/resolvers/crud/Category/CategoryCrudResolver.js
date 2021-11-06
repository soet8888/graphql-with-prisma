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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateCategoryArgs_1 = require("./args/AggregateCategoryArgs");
const CreateCategoryArgs_1 = require("./args/CreateCategoryArgs");
const CreateManyCategoryArgs_1 = require("./args/CreateManyCategoryArgs");
const DeleteCategoryArgs_1 = require("./args/DeleteCategoryArgs");
const DeleteManyCategoryArgs_1 = require("./args/DeleteManyCategoryArgs");
const FindFirstCategoryArgs_1 = require("./args/FindFirstCategoryArgs");
const FindManyCategoryArgs_1 = require("./args/FindManyCategoryArgs");
const FindUniqueCategoryArgs_1 = require("./args/FindUniqueCategoryArgs");
const GroupByCategoryArgs_1 = require("./args/GroupByCategoryArgs");
const UpdateCategoryArgs_1 = require("./args/UpdateCategoryArgs");
const UpdateManyCategoryArgs_1 = require("./args/UpdateManyCategoryArgs");
const UpsertCategoryArgs_1 = require("./args/UpsertCategoryArgs");
const helpers_1 = require("../../../helpers");
const Category_1 = require("../../../models/Category");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCategory_1 = require("../../outputs/AggregateCategory");
const CategoryGroupBy_1 = require("../../outputs/CategoryGroupBy");
let CategoryCrudResolver = class CategoryCrudResolver {
    async category(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async categories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCategory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCategory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).category.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCategory(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).category.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueCategoryArgs_1.FindUniqueCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "category", null);
__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstCategoryArgs_1.FindFirstCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "findFirstCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [Category_1.Category], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyCategoryArgs_1.FindManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "categories", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateCategoryArgs_1.CreateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "createCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyCategoryArgs_1.CreateManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "createManyCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteCategoryArgs_1.DeleteCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "deleteCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateCategoryArgs_1.UpdateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "updateCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyCategoryArgs_1.DeleteManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "deleteManyCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyCategoryArgs_1.UpdateManyCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "updateManyCategory", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Category_1.Category, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertCategoryArgs_1.UpsertCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "upsertCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateCategory_1.AggregateCategory, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateCategoryArgs_1.AggregateCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "aggregateCategory", null);
__decorate([
    TypeGraphQL.Query(_returns => [CategoryGroupBy_1.CategoryGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByCategoryArgs_1.GroupByCategoryArgs]),
    __metadata("design:returntype", Promise)
], CategoryCrudResolver.prototype, "groupByCategory", null);
CategoryCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CategoryCrudResolver);
exports.CategoryCrudResolver = CategoryCrudResolver;
