import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/exections/all-expection.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController, AdminController],
  providers: [
    AppService,
    CatsService,
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude({ path: 'admin', method: RequestMethod.GET }, 'admin/(.*)')
      .forRoutes(CatsController);
  }
}
