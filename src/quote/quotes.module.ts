import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { Quote } from './quote.entity';

/*
    Class: QuoteModule
    Function: Handle all the connections between modules and 
              what functionality they provide in the application.
*/

@Module({
  imports: [TypeOrmModule.forFeature([Quote])], //import quote entity
  controllers: [QuotesController],  //handle requests
  providers: [QuoteService], //handle the request data
})
export class QuoteModule {}
