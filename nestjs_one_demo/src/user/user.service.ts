import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entity/User.entity';

@Injectable()
export class UserssService {
  constructor(
    @InjectRepository(Users)
    private readonly UserssRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.UserssRepository.find();
  }

  async remove(name: string): Promise<void> {
    await this.UserssRepository.delete(name);
  }
}
