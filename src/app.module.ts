import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quotes.module';

/*
    Class: AppModule
    Function: Handle all the connections between modules and 
              what functionality they provide in the application.
              This also sets up the database connection to quote.db
*/

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'quote.db',
      synchronize: false, //should be false for production [security]
      entities: ["dist/**/*.entity.js"], //where to find the entity files
    }),
    QuoteModule],
  controllers: [AppController], //handle requests
  providers: [AppService], //handle the request data
})
export class AppModule {}
