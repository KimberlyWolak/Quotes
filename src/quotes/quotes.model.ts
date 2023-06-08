export class Quote {
  quote_id: number;
  quote: string;
  character: string;

  constructor(quote_id: number, quote: string, character: string) {
    this.quote_id = quote_id;
    this.quote = quote;
    this.character = character;
  }
}
