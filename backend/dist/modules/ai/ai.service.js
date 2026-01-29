"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIFeaturesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AIFeaturesService = class AIFeaturesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async ingestBatch(features) {
        return this.prisma.featureAprendizaje.createMany({ data: features.map(f => ({ featureCodigo: f.featureCodigo, valor: f.valor, anonimo: f.anonimo ?? true })) });
    }
    async list(studentId) {
        // For now return all features; in future filter by student mapping
        return this.prisma.featureAprendizaje.findMany({ take: 200 });
    }
};
exports.AIFeaturesService = AIFeaturesService;
exports.AIFeaturesService = AIFeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AIFeaturesService);
