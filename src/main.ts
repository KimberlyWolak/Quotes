import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Author: Kimberly Wolak

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
