import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //, { bufferLogs: true, }
  // app.useLogger(app.get(LoggerService));
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
