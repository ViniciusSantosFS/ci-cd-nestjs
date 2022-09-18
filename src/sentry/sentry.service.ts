import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class SentryService {
  getError(): Error {
    return new InternalServerErrorException('Hello world Sentry');
  }
}
