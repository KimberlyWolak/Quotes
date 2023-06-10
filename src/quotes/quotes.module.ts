import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

@Module({
  imports: [TypeOrmModule.forRoot({
   type :"sqlite",
   database: "quotesdb",
   entities: [],
   synchronize: true
 })
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}