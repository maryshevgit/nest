import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilters } from '@src/exception-filters/exception.filter';
import { mainLogger } from '@src/middlewars/main-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilters());
  app.use(mainLogger);
  await app.listen(3000);
}
bootstrap();
