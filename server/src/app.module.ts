import { ChatsGateWay } from './chat.gateway';
import { Module } from '@nestjs/common';

@Module({
  providers: [ChatsGateWay],
})
export class AppModule {}
