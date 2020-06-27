import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let rString = '';
    for(let i=value.length-1;i>=0;i--) {
      rString = rString + value.charAt(i);
    }
    return rString;
  }

}