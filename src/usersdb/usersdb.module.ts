import { Module } from '@nestjs/common';
import { UsersdbService } from './usersdb.service';
import { UsersdbController } from './usersdb.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersdbController],
  providers: [UsersdbService],
})
export class UsersdbModule {}
