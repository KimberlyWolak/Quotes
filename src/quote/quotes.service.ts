import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

/*
    Class: QuoteService
    Function: Handles the incoming rest data
*/

@Injectable()
export class QuoteService {
    
    /*
        TEST UPLOAD TO DATABASE 
        Uncomment this db is empty for some reason.
        This will read the json file back into the provided DB.
    */
    
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

    //Get All The Quote Records
    async findAll(): Promise<Quote[]> {
        return await this.quoteRepository.find();
    }
    
    //Find A Random Quote From The Database
    async findRandomQuote(): Promise<Quote | null> {
        const quotesArr = await this.findAll(); //wait for all quotes to return
        const randomQuoteIndex = Math.floor(Math.random() * quotesArr.length); //generate random index
        const randomQuote = await this.quoteRepository.findOneBy({ quote_id: randomQuoteIndex}); //wait for random quote select
        return randomQuote;
    }
    
    //gDisplay the generated HTML Generating A Random Quote
    async displayFormatedObject(): Promise<string | null> {
        const randomQuote = await this.findRandomQuote(); // Wait For Quote Generation
        const html = this.generateRandomQuoteHTML(randomQuote.quote_id, randomQuote.quote, randomQuote.character);
        return html;
    }
    
    //generate HTML from JSON object for readability
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