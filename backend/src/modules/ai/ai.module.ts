import { Module } from '@nestjs/common';
import { AIFeaturesService } from './ai.service';
import { AIController } from './ai.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AIFeaturesService],
  controllers: [AIController],
  exports: [AIFeaturesService],
})
export class AIFeaturesModule {}
