import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {

    if(value.length > args[0]){
      return value.substring(0, args[0]) + '...';
    }
    return null;
  }

}
