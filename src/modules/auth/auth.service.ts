import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Admin } from '@modules/users/entities/admin.entity';
import { Client } from '@modules/users/entities/client.entity';
import { ILoginResponse } from '@modules/auth/interfaces/iLogin.response';
import { iPayload } from '@modules/auth/interfaces/payload.type';
import { InjectRepository } from '@nestjs/typeorm';

type LoginDto = {
  email: string;
  password: string;
  type: 'admin' | 'client';
};

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async login({ email, password, type }: LoginDto): Promise<ILoginResponse> {
    const where = { email };

    const user =
      type == 'admin'
        ? await this.adminRepository.findOne({
            where,
            select: ['id', 'name', 'lastName', 'email', 'password'],
          })
        : await this.clientRepository.findOne({
            where,
            select: ['id', 'name', 'lastName', 'email', 'password'],
          });

    await this.validateUser(user, password);

    return this.createResponse(user!, type);
  }

  private async validateUser(
    user: Admin | Client | null,
    password: string,
  ): Promise<boolean> {
    const isValid = (user && (await user.validatePassword(password))) || false;

    if (!isValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return isValid;
  }

  private createResponse(
    user: Admin | Client,
    type: 'admin' | 'client',
  ): ILoginResponse {
    const payload: iPayload = { sub: user.id, email: user.email, type };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        type,
      },
    };
  }
}
