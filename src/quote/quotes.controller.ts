import { Get, Controller} from '@nestjs/common';
import { QuoteService } from './quotes.service';
import { Quote } from './quote.entity';

/*
    Class: QuotesController
    Called Controller Web Address: localhost/quotes
    Function: Uses the methods from quotes service with Rest commands. 
              In our case it will read a random quote from the database
              using a GET rest command.
*/

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quoteService: QuoteService) {} //read in service

    @Get()
    findRandomQuote(): Promise<String> {  //generate random quote and format the json to html
        return this.quoteService.displayFormatedObject();       
    }
}