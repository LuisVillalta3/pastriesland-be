import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { UsersService } from '@modules/users/services/users.service';
import {
  CreateAdminSchema,
  CreateUserSchema,
} from '@/components/schemas/create-user.schema';
import { HttpResponse } from '@common/http-responses/http.response';
import { ClientDto } from '@modules/users/dto/client.dto';
import { ErrorHandler } from '@common/decorators/error-handler.decorator';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiExtraModels(CreateUserSchema)
  @ApiCreatedResponse({
    description: 'User created successfully',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: HttpStatus.OK },
        message: { type: 'string', example: 'Admin created successfully' },
        data: {
          $ref: getSchemaPath(CreateUserSchema),
        },
      },
    },
  })
  @ErrorHandler()
  async create(
    @Body() userDto: ClientDto,
  ): Promise<HttpResponse<CreateAdminSchema>> {
    const user = await this.usersService.createClient(userDto);

    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      data: user,
    };
  }
}
