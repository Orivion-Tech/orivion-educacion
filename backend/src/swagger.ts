import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Sistema Educativo API')
    .setDescription('API para el sistema educativo (MVP)')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();

  try {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  } catch (err) {
    // If swagger generation fails (e.g., in limited runtime environments), log and continue
    // This prevents the whole app from crashing during container startup.
    // eslint-disable-next-line no-console
    const msg = (err as any)?.message || err;
    console.warn('Swagger setup skipped:', msg);
  }
}
