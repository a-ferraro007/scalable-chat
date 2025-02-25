import { Module } from '@nestjs/common'
import { RoomController } from './room.controller'
import { RoomService } from './room.service'

@Module({
  imports: [],
  controllers: [RoomController],
  exports: [RoomService],
  providers: [RoomService],
})
export class RoomModule {}
