import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { AuditService } from './audit.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('audit')
export class AuditController {
  constructor(private svc: AuditService) {}

  @Post('events')
  @UseGuards(JwtAuthGuard)
  async event(@Body() body: { tipo_evento: string; payload: any }) {
    // for demo, record an audit entry
    return this.svc.record(body.tipo_evento, null, body.payload);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async query(@Query('since') since: string) {
    return this.svc.query({ since });
  }
}
