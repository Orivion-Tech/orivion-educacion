import { Module } from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [InstitutionsService],
  controllers: [InstitutionsController],
  exports: [InstitutionsService],
})
export class InstitutionsModule {}
