import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets/decorators";
import { WebSocketServer } from "@nestjs/websockets/decorators/gateway-server.decorator";

@WebSocketGateway(3000, { cors: true })
export class ChatsGateWay {
    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handleEvent(@MessageBody() data: string): void {
        console.log(data)
    }
}

