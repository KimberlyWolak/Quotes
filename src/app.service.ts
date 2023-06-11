import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    //Support Functions
    redirectToQuotes(res){
      res.redirect('/quotes')
    }
}