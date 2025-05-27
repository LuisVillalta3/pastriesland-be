import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorLog } from '@modules/error-log/error-log.entity';
import { ErrorLogService } from './error-log.service';
import { ErrorLogController } from './error-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorLog])],
  providers: [ErrorLogService],
  controllers: [ErrorLogController],
  exports: [TypeOrmModule, ErrorLogService],
})
export class ErrorLogModule {}
