import { Injectable, Logger } from '@nestjs/common';
import { Quote } from './quotes.model';

//Support Functions
@Injectable()
export class QuotesService {
  quotesArr: Quote[] = [];

  insertQuote(quote_id: number, quote: string, character: string) {
    const quoteObj = new Quote(quote_id, quote, character);
    this.quotesArr.push(quoteObj);
  }

  getQuotes() {
    this.getQuoteJsonData();
    return this.quotesArr;
  }

  generateRandomQuote() {
    const randomQuoteNum = Math.floor(Math.random() * this.quotesArr.length);
    return this.quotesArr[randomQuoteNum];
  }

  generateRandomQuoteHTML(quote_id, quote, character) {
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

  getQuoteJsonData() {
    const fs = require('fs');
    try {
      const dataRaw = fs.readFileSync('src/data/office_quotes.json');
      const quoteData = JSON.parse(dataRaw);
      for (let i = 0; i < quoteData.length; i++) {
        this.insertQuote(
          quoteData[i].quote_id,
          quoteData[i].quote,
          quoteData[i].character,
        );
      }
    } catch (err) {
      Logger.log(err);
    }
  }
}
