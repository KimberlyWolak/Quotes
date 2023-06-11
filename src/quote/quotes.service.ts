import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuoteService {
    //TESTING UPLOAD TO DATABASE
    /*constructor(@InjectRepository(Quote) private quoteRepository: Repository<Quote>) {
        const fs = require('fs');
        const dataRaw = fs.readFileSync('src/data/office_quotes.json');
        const quoteData = JSON.parse(dataRaw);
        for (let i = 0; i < quoteData.length; i++) {
                const quote = new Quote();
                quote.quote_id = quoteData[i].quote_id;
                quote.quote= quoteData[i].quote;
                quote.character = quoteData[i].character;
                this.quoteRepository.save(quote);
        } 
    }*/
    
    constructor(@InjectRepository(Quote) private quoteRepository: Repository<Quote>) {}

    async findAll(): Promise<Quote[]> {
        return await this.quoteRepository.find();
    }
    
    async findRandomQuote(): Promise<Quote | null> {
        const quotesArr = await this.findAll();
        const randomQuoteIndex = Math.floor(Math.random() * quotesArr.length);
        const randomQuote = await this.quoteRepository.findOneBy({ quote_id: randomQuoteIndex});
        return randomQuote;
    }
    
    async displayFormatedObject(): Promise<string | null> {
        const randomQuote = await this.findRandomQuote();
        const html = this.generateRandomQuoteHTML(randomQuote.quote_id, randomQuote.quote, randomQuote.character);
        return html;
    }
    
    generateRandomQuoteHTML(quote_id: any, quote: any, character: any){
        const html =
        '<div style="margin-bottom: 10px;"><b> Quote ID: </b>' +
        quote_id +
        '</div>' +
        '<div style="margin-bottom: 10px;"><b> Quote: </b>' +
        quote +
        '</div>' +
        '<div><b> Character: </b>' +
        character +
        '</div>';
        
        return html;
    }
}