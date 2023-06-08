import { Controller, Post, Get} from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quotesService: QuotesService){}
    
  @Post()
  addQuote(): any {
      const quote = this.quotesService.insertQuote(null,null,null);
      return quote;
  }
  
  //TESTING - DELETE
  @Get()
  getHello(): string {
    return this.quotesService.getHello();
  }
  
}