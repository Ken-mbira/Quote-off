import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteLife'
})
export class QuoteLifePipe implements PipeTransform {

  transform(value: any): string {
    let now:Date = new Date();
    let thisMoment:any = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dateDifference = Math.abs(thisMoment - value);
    var days: number = Math.floor(dateDifference/(86400000))
    var hours: number = Math.floor(dateDifference/3600000);
    var minutes: number = Math.floor(dateDifference/60000)
    var seconds: number = Math.floor(dateDifference/1000)
    var statement: string = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + "seconds ago" ;
    return statement;
    
  }

}
