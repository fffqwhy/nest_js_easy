import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserssService } from './user.service';
import { UsersController } from './user.controller';
import { Users } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserssService],
  controllers: [UsersController],
})
export class UsersModule {}
