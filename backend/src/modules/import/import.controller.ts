import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ImportService } from './import.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('imports')
export class ImportController {
  constructor(private svc: ImportService) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard)
  async upload(@Body() body: { filename: string }) {
    return this.svc.createJob({ filename: body.filename });
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async status(@Param('id') id: string) {
    return this.svc.getJob(id);
  }
}
