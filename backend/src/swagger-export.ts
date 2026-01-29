import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

async function exportDoc() {
  const app = await NestFactory.create(AppModule, { logger: false });
  const config = new DocumentBuilder().setTitle('Sistema Educativo API').setVersion('0.1.0').addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('openapi.json', JSON.stringify(document, null, 2));
  await app.close();
  console.log('openapi.json written');
}

exportDoc().catch(err => { console.error(err); process.exit(1); });
