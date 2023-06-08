import { Injectable } from '@nestjs/common';
import { Quote } from './quotes.model'

@Injectable()
export class QuotesService{
    quotes: Quote[] = [];
    
    insertQuote(quote_id: number, quote: string, character: string){
        const quoteTemp = new Quote(quote_id, quote, character);
        this.quotes.push(quoteTemp);
    }
    
    //TESTING - DELETE
    getHello(): string {
        return 'Hello World!';
    }
    
}