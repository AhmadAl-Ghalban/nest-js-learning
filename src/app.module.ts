import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { LoggerMiddleware } from './users/logger.middleware';
// import { UserController } from './users/user.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes(UserController);
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'users', method: RequestMethod.GET });

  }
}
