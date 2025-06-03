import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from '@config/env.config';
import { CreateAdminResponse } from '@modules/users/responses/create-admin.response';
import { encryptPassword } from '@/utils/encrypt-password.util';
import { ClientDto } from '@modules/users/dto/client.dto';
import { ClientEntity } from '@modules/users/entities/client.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly userRepository: Repository<ClientEntity>,
    private readonly configService: ConfigService<EnvConfig>,
  ) {}

  async createClient({
    name,
    lastName,
    email,
    password,
  }: ClientDto): Promise<CreateAdminResponse> {
    if (await this.findUserByEmail(email)) {
      throw new ConflictException('Este email ya está en uso');
    }

    const encrypted_password = await encryptPassword(
      password,
      +this.configService.get<number>('SALT_OR_ROUNDS', 10),
    );

    const client = this.userRepository.create({
      name,
      lastName,
      email,
      password: encrypted_password,
    });

    return await this.userRepository.save(client);
  }

  async findUserByEmail(email: string): Promise<ClientEntity | null> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async getAllClients(): Promise<ClientEntity[]> {
    return await this.userRepository.find();
  }
}
