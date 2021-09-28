import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eo'
})
export class EoPipe implements PipeTransform {

  transform(value: number): String {

    if (value % 2 == 0){
      return "even"
    }else{
      return "odd"
    }

    
  }

}
