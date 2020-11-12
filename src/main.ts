import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/exections/all-expection.filter';
import { AuthGuard } from './common/guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new AllExceptionsFilter());
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
