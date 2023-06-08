import { Controller, Post, Get, Body, Logger } from '@nestjs/common';
import { QuotesService } from './quotes.service';

//Calling Functions
@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getAllQuotes(): any {
    this.quotesService.getQuotes();
    const randomQuote = this.quotesService.generateRandomQuote();
    const quoteID = randomQuote.quote_id;
    const quote = randomQuote.quote;
    const character = randomQuote.character;

    return this.quotesService.generateRandomQuoteHTML(
      quoteID,
      quote,
      character,
    );
  }
}
