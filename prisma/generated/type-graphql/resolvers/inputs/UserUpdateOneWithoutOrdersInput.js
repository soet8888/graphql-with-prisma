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
exports.UserUpdateOneWithoutOrdersInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOrdersInput_1 = require("../inputs/UserCreateOrConnectWithoutOrdersInput");
const UserCreateWithoutOrdersInput_1 = require("../inputs/UserCreateWithoutOrdersInput");
const UserUpdateWithoutOrdersInput_1 = require("../inputs/UserUpdateWithoutOrdersInput");
const UserUpsertWithoutOrdersInput_1 = require("../inputs/UserUpsertWithoutOrdersInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutOrdersInput = class UserUpdateOneWithoutOrdersInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutOrdersInput_1.UserCreateWithoutOrdersInput)
], UserUpdateOneWithoutOrdersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOrdersInput_1.UserCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutOrdersInput_1.UserCreateOrConnectWithoutOrdersInput)
], UserUpdateOneWithoutOrdersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutOrdersInput_1.UserUpsertWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutOrdersInput_1.UserUpsertWithoutOrdersInput)
], UserUpdateOneWithoutOrdersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutOrdersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutOrdersInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateOneWithoutOrdersInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrdersInput_1.UserUpdateWithoutOrdersInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutOrdersInput_1.UserUpdateWithoutOrdersInput)
], UserUpdateOneWithoutOrdersInput.prototype, "update", void 0);
UserUpdateOneWithoutOrdersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneWithoutOrdersInput);
exports.UserUpdateOneWithoutOrdersInput = UserUpdateOneWithoutOrdersInput;
