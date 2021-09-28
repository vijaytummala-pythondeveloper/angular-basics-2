import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addnum'
})
export class AddnumPipe implements PipeTransform {

  transform(value: number,val:number): number {
    return value + val;
  }

}
