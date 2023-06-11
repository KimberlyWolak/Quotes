import { Get, Controller} from '@nestjs/common';
import { QuoteService } from './quotes.service';
import { Quote } from './quote.entity';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quoteService: QuoteService) {}

    @Get()
    findRandomQuote(): Promise<String> {
        return this.quoteService.displayFormatedObject();       
    }
}