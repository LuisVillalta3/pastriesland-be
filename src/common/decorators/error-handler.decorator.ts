import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { ErrorHandlerInterceptor } from '@common/interceptors/error-handler.interceptor';

type ErrorHandlerProps = {
  context: string;
};

export function ErrorHandler({ context }: ErrorHandlerProps) {
  return applyDecorators(UseInterceptors(new ErrorHandlerInterceptor(context)));
}
