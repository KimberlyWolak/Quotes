import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

/*
    Class: AppController
    Called Controller Web Address: localhost
    Function: Redirect to /quotes to display a random quote
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  redirect(@Res() res) {
    return this.appService.redirectToQuotes(res);
  }
}
