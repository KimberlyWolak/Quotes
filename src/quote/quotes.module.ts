import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { Quote } from './quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  providers: [QuoteService],
  controllers: [QuotesController],
})
export class QuoteModule {}