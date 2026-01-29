import { Controller, Post, Body, Get, Query, UseGuards } from '@nestjs/common';
import { AIFeaturesService } from './ai.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('ai/features')
export class AIController {
  constructor(private svc: AIFeaturesService) {}

  @Post('batch')
  @UseGuards(JwtAuthGuard)
  async ingest(@Body() body: Array<{ featureCodigo: string; valor: number; anonimo?: boolean }>) {
    return this.svc.ingestBatch(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async list(@Query('studentId') studentId: string) {
    return this.svc.list(studentId);
  }
}
