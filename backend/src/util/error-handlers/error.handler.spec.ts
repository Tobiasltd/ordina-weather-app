import { ErrorHandler } from './error-handler';
import { HttpException } from '@nestjs/common';

describe('ErrorHandler', () => {
  let errorHandler: ErrorHandler;

  beforeEach(() => {
    errorHandler = new ErrorHandler();
  });

  it('should be defined', () => {
    expect(errorHandler).toBeDefined();
  });

  it('should handle an error and return a formatted error object', () => {
    const error = new Error('Test Error');
    const handledError = errorHandler.handleError(error) as HttpException;

    expect(handledError.message).toEqual('An internal server error occurred');
    expect(handledError.getStatus()).toEqual(500);
  });

  it('should handle a HttpException error and return the original error object', () => {
    const error = new HttpException('Test Error', 404);
    const handledError = errorHandler.handleError(error) as HttpException;

    expect(handledError.message).toEqual('Test Error');
    expect(handledError.getStatus()).toEqual(404);
  });
});
