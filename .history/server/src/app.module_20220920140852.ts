import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,
  Config],
  controllers: [],
  providers: []
})
export class AppModule {}
