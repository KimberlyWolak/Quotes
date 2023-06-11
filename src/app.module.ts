import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote/quotes.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'quote.db',
      synchronize: true,
      entities: ["dist/**/*.entity.js"],
    }),
    QuoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
