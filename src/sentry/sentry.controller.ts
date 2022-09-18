import { SentryInterceptor } from './sentry.interceptor';

import { Controller, Get } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { SentryService } from './sentry.service';

@UseInterceptors(SentryInterceptor)
@Controller('sentry')
export class SentryController {
  constructor(private readonly sentryService: SentryService) {}

  @Get()
  getError(): string {
    const resultOrError = this.sentryService.getError();

    if (resultOrError instanceof Error) {
      throw new Error(resultOrError.message);
    }

    return resultOrError;
  }
}
