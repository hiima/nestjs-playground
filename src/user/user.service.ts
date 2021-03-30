import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUserList() {
    // relations に指定するのはテーブル名文字列だが、これを型安全にするには？
    return this.userRepository.find({ relations: ['articles'] });
  }
}
