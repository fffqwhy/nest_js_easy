import { Controller, Get } from '@nestjs/common';
import { UserssService } from './user.service';
@Controller('mysql')
export class UsersController {
  constructor(private readonly usersService: UserssService) {}

  @Get()
  getHello(): any {
    return this.usersService.findAll();
  }
  @Get('1')
  getOne(): string {
    return '123414';
  }
}
