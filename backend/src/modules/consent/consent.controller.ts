import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { ConsentService } from './consent.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller()
export class ConsentController {
  constructor(private svc: ConsentService) {}

  @Get('policies')
  async policies(@Query('institutionId') institutionId: string) {
    return this.svc.listPolicies(institutionId);
  }

  @Post('consents')
  @UseGuards(JwtAuthGuard)
  async create(@Body() body: { personaMenorId: string; actorResponsableId: string; otorgado: boolean }) {
    return this.svc.createConsent(body);
  }

  @Get('consents')
  @UseGuards(JwtAuthGuard)
  async list(@Query('personaId') personaId: string) {
    return this.svc.listConsents(personaId);
  }
}
