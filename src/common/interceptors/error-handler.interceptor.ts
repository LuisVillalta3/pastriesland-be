import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements NestInterceptor {
  private readonly logger;

  constructor(private readonly context: string) {
    this.logger = new Logger(context);
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        this.logger.error(
          `Error in ${context.getHandler().name}`,
          error.message,
          error.stack,
        );

        throw error;
      }),
    );
  }
}
