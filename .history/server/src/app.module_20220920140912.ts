import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,
  ConfigModule.forRoot({ isGlobal: true})],
  controllers: [],
  providers: []
})
export class AppModule {}
