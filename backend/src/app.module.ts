import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TenantMiddleware } from './common/middleware/tenant.middleware';
import { HealthModule } from './common/health.module';
import { InstitutionsModule } from './modules/institutions/institutions.module';
import { UsersModule } from './modules/users/users.module';
import { StudentsModule } from './modules/students/students.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { ConsentModule } from './modules/consent/consent.module';
import { AuditModule } from './modules/audit/audit.module';
import { GradesModule } from './modules/grades/grades.module';
import { AIFeaturesModule } from './modules/ai/ai.module';
import { ImportModule } from './modules/import/import.module';

@Module({
  imports: [
    HealthModule,
    PrismaModule,
    AuthModule,
    InstitutionsModule,
    UsersModule,
    StudentsModule,
    EnrollmentsModule,
    ConsentModule,
    AuditModule,
    GradesModule,
    AIFeaturesModule,
    ImportModule
  ],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes('*');
  }
}
