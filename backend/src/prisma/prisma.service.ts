import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    if (process.env.SKIP_DB === 'true') return;
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
