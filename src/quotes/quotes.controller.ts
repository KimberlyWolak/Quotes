import { Controller, Post, Get, Body, Logger} from '@nestjs/common';
import { QuotesService } from './quotes.service';

//Calling Functions
@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService){}
  
  @Get()
  getAllQuotes(): any{
      this.quotesService.getQuotes();
      return this.quotesService.generateRandomQuote();
  }
}