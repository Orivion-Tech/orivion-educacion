"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const jwt_1 = require("@nestjs/jwt");
const tenant_middleware_1 = require("./common/middleware/tenant.middleware");
const institutions_module_1 = require("./modules/institutions/institutions.module");
const users_module_1 = require("./modules/users/users.module");
const students_module_1 = require("./modules/students/students.module");
const enrollments_module_1 = require("./modules/enrollments/enrollments.module");
const consent_module_1 = require("./modules/consent/consent.module");
const audit_module_1 = require("./modules/audit/audit.module");
const grades_module_1 = require("./modules/grades/grades.module");
const ai_module_1 = require("./modules/ai/ai.module");
const import_module_1 = require("./modules/import/import.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(tenant_middleware_1.TenantMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'change_me_super_secret',
                signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '15m' },
            }),
            auth_module_1.AuthModule,
            // domain modules
            institutions_module_1.InstitutionsModule,
            users_module_1.UsersModule,
            students_module_1.StudentsModule,
            enrollments_module_1.EnrollmentsModule,
            consent_module_1.ConsentModule,
            audit_module_1.AuditModule,
            grades_module_1.GradesModule,
            ai_module_1.AIFeaturesModule,
            import_module_1.ImportModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
