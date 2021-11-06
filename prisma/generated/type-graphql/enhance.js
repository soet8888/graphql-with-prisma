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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Product: crudResolvers.ProductCrudResolver,
    Category: crudResolvers.CategoryCrudResolver,
    Order: crudResolvers.OrderCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Product: {
        product: actionResolvers.FindUniqueProductResolver,
        findFirstProduct: actionResolvers.FindFirstProductResolver,
        products: actionResolvers.FindManyProductResolver,
        createProduct: actionResolvers.CreateProductResolver,
        createManyProduct: actionResolvers.CreateManyProductResolver,
        deleteProduct: actionResolvers.DeleteProductResolver,
        updateProduct: actionResolvers.UpdateProductResolver,
        deleteManyProduct: actionResolvers.DeleteManyProductResolver,
        updateManyProduct: actionResolvers.UpdateManyProductResolver,
        upsertProduct: actionResolvers.UpsertProductResolver,
        aggregateProduct: actionResolvers.AggregateProductResolver,
        groupByProduct: actionResolvers.GroupByProductResolver
    },
    Category: {
        category: actionResolvers.FindUniqueCategoryResolver,
        findFirstCategory: actionResolvers.FindFirstCategoryResolver,
        categories: actionResolvers.FindManyCategoryResolver,
        createCategory: actionResolvers.CreateCategoryResolver,
        createManyCategory: actionResolvers.CreateManyCategoryResolver,
        deleteCategory: actionResolvers.DeleteCategoryResolver,
        updateCategory: actionResolvers.UpdateCategoryResolver,
        deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
        updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
        upsertCategory: actionResolvers.UpsertCategoryResolver,
        aggregateCategory: actionResolvers.AggregateCategoryResolver,
        groupByCategory: actionResolvers.GroupByCategoryResolver
    },
    Order: {
        order: actionResolvers.FindUniqueOrderResolver,
        findFirstOrder: actionResolvers.FindFirstOrderResolver,
        orders: actionResolvers.FindManyOrderResolver,
        createOrder: actionResolvers.CreateOrderResolver,
        createManyOrder: actionResolvers.CreateManyOrderResolver,
        deleteOrder: actionResolvers.DeleteOrderResolver,
        updateOrder: actionResolvers.UpdateOrderResolver,
        deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
        updateManyOrder: actionResolvers.UpdateManyOrderResolver,
        upsertOrder: actionResolvers.UpsertOrderResolver,
        aggregateOrder: actionResolvers.AggregateOrderResolver,
        groupByOrder: actionResolvers.GroupByOrderResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    }
};
const crudResolversInfo = {
    Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
    Category: ["category", "findFirstCategory", "categories", "createCategory", "createManyCategory", "deleteCategory", "updateCategory", "deleteManyCategory", "updateManyCategory", "upsertCategory", "aggregateCategory", "groupByCategory"],
    Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
    FindUniqueProductArgs: ["where"],
    FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProductArgs: ["data"],
    CreateManyProductArgs: ["data", "skipDuplicates"],
    DeleteProductArgs: ["where"],
    UpdateProductArgs: ["data", "where"],
    DeleteManyProductArgs: ["where"],
    UpdateManyProductArgs: ["data", "where"],
    UpsertProductArgs: ["where", "create", "update"],
    AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueCategoryArgs: ["where"],
    FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateCategoryArgs: ["data"],
    CreateManyCategoryArgs: ["data", "skipDuplicates"],
    DeleteCategoryArgs: ["where"],
    UpdateCategoryArgs: ["data", "where"],
    DeleteManyCategoryArgs: ["where"],
    UpdateManyCategoryArgs: ["data", "where"],
    UpsertCategoryArgs: ["where", "create", "update"],
    AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueOrderArgs: ["where"],
    FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateOrderArgs: ["data"],
    CreateManyOrderArgs: ["data", "skipDuplicates"],
    DeleteOrderArgs: ["where"],
    UpdateOrderArgs: ["data", "where"],
    DeleteManyOrderArgs: ["where"],
    UpdateManyOrderArgs: ["data", "where"],
    UpsertOrderArgs: ["where", "create", "update"],
    AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Product: relationResolvers.ProductRelationsResolver,
    Category: relationResolvers.CategoryRelationsResolver,
    Order: relationResolvers.OrderRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Product: ["categories", "orders"],
    Category: ["products"],
    Order: ["customer", "products"],
    User: ["orders"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
const modelsInfo = {
    Product: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    Category: ["id", "createdAt", "updatedAt", "name"],
    Order: ["id", "createdAt", "updatedAt", "userId"],
    User: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
    ProductGroupBy: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
    CategoryGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
    OrderGroupBy: ["id", "createdAt", "updatedAt", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    ProductCount: ["categories", "orders"],
    ProductCountAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_all"],
    ProductAvgAggregate: ["quantity"],
    ProductSumAggregate: ["quantity"],
    ProductMinAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductMaxAggregate: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    CategoryCount: ["products"],
    CategoryCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
    CategoryAvgAggregate: ["id"],
    CategorySumAggregate: ["id"],
    CategoryMinAggregate: ["id", "createdAt", "updatedAt", "name"],
    CategoryMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
    OrderCount: ["products"],
    OrderCountAggregate: ["id", "createdAt", "updatedAt", "userId", "_all"],
    OrderAvgAggregate: ["userId"],
    OrderSumAggregate: ["userId"],
    OrderMinAggregate: ["id", "createdAt", "updatedAt", "userId"],
    OrderMaxAggregate: ["id", "createdAt", "updatedAt", "userId"],
    UserCount: ["orders"],
    UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductWhereUniqueInput: ["id", "sku"],
    ProductOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "_count", "_avg", "_max", "_min", "_sum"],
    ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    CategoryWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "products"],
    CategoryOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "products"],
    CategoryWhereUniqueInput: ["id"],
    CategoryOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
    CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
    OrderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "customer", "products"],
    OrderOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "userId", "customer", "products"],
    OrderWhereUniqueInput: ["id"],
    OrderOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    ProductCreateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductUpdateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories", "orders"],
    ProductCreateManyInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    CategoryCreateInput: ["createdAt", "updatedAt", "name", "products"],
    CategoryUpdateInput: ["createdAt", "updatedAt", "name", "products"],
    CategoryCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
    CategoryUpdateManyMutationInput: ["createdAt", "updatedAt", "name"],
    OrderCreateInput: ["id", "createdAt", "updatedAt", "customer", "products"],
    OrderUpdateInput: ["id", "createdAt", "updatedAt", "customer", "products"],
    OrderCreateManyInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
    UserCreateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserUpdateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
    UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserUpdateManyMutationInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CategoryListRelationFilter: ["every", "some", "none"],
    OrderListRelationFilter: ["every", "some", "none"],
    CategoryOrderByRelationAggregateInput: ["_count"],
    OrderOrderByRelationAggregateInput: ["_count"],
    ProductCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductAvgOrderByAggregateInput: ["quantity"],
    ProductMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    ProductSumOrderByAggregateInput: ["quantity"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ProductListRelationFilter: ["every", "some", "none"],
    ProductOrderByRelationAggregateInput: ["_count"],
    CategoryCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
    CategoryAvgOrderByAggregateInput: ["id"],
    CategoryMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
    CategoryMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
    CategorySumOrderByAggregateInput: ["id"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    OrderCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderAvgOrderByAggregateInput: ["userId"],
    OrderMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "userId"],
    OrderSumOrderByAggregateInput: ["userId"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserSumOrderByAggregateInput: ["id"],
    CategoryCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "connect"],
    OrderCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    CategoryUpdateManyWithoutProductsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    OrderUpdateManyWithoutProductsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    ProductCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
    ProductUpdateManyWithoutCategoriesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    ProductCreateNestedManyWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ProductUpdateManyWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
    OrderUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CategoryCreateWithoutProductsInput: ["createdAt", "updatedAt", "name"],
    CategoryCreateOrConnectWithoutProductsInput: ["where", "create"],
    OrderCreateWithoutProductsInput: ["id", "createdAt", "updatedAt", "customer"],
    OrderCreateOrConnectWithoutProductsInput: ["where", "create"],
    CategoryUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
    CategoryUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
    CategoryUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
    CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
    OrderUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
    OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId"],
    ProductCreateWithoutCategoriesInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "orders"],
    ProductCreateOrConnectWithoutCategoriesInput: ["where", "create"],
    ProductUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
    ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "sku", "description", "quantity"],
    UserCreateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    UserCreateOrConnectWithoutOrdersInput: ["where", "create"],
    ProductCreateWithoutOrdersInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories"],
    ProductCreateOrConnectWithoutOrdersInput: ["where", "create"],
    UserUpsertWithoutOrdersInput: ["update", "create"],
    UserUpdateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
    ProductUpsertWithWhereUniqueWithoutOrdersInput: ["where", "update", "create"],
    ProductUpdateWithWhereUniqueWithoutOrdersInput: ["where", "data"],
    ProductUpdateManyWithWhereWithoutOrdersInput: ["where", "data"],
    OrderCreateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "products"],
    OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
    OrderCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
    OrderUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
    OrderUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
    OrderUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
    CategoryUpdateWithoutProductsInput: ["createdAt", "updatedAt", "name"],
    OrderUpdateWithoutProductsInput: ["id", "createdAt", "updatedAt", "customer"],
    ProductUpdateWithoutCategoriesInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "orders"],
    ProductUpdateWithoutOrdersInput: ["id", "createdAt", "updatedAt", "name", "sku", "description", "quantity", "categories"],
    OrderCreateManyCustomerInput: ["id", "createdAt", "updatedAt"],
    OrderUpdateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "products"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
